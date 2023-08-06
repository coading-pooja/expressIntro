const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price: price,
    description:description,
    imageUrl:imageUrl
  })
  .then(res=>{
    console.log('created product');
  
  })
  .catch(err=>{
    console.log(err);
  })
  res.redirect('/');
 
}; 

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}})
  .then(product => {
    if (!product) { 
      return res.redirect('/');
    }
    console.log(product);
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product[0]
    });
  })
  .catch(err=>console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.update(
    {
      title:updatedTitle,
  imageUrl:updatedImageUrl,
  description:updatedDesc,
  price:updatedPrice,
    },{where:{id:prodId}})
    .then(res=>{
   console.log('updated');
    })
    
.catch(err=>console.log(err));
  

  res.redirect('/admin/products');

  

  
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products)=>{
    console.log(products);
     res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
  .catch(err=>console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({where:{id:prodId}})
  .then(()=>{
    console.log('Deleted succees');
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err));
  
};