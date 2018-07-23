import React,{Component} from 'react';
import 'whatwg-fetch';
import _ from 'lodash';
import ItemForm from './ItemForm';

 class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products:[]
        };
       // this.getFileData = this.getFileData.bind(this);
       // this.previewFile = this.previewFile.bind(this);
      //  this.getFormData = this.getFormData.bind(this);
      //  this.handleSubmit = this.handleSubmit.bind(this);
     //   this.handleDelete = this.handleDelete.bind(this);
     //   this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleFiles = this.handleFiles.bind(this);
      }
    //   getFormData(object) {
    //     const formData = new FormData();
    //     Object.keys(object).forEach(key => formData.append(key, object[key]));
    //     return formData;
    // }
    componentDidMount() {
        fetch('/api/products')
          .then(res => res.json())
          .then(json => {
            this.setState({
              products: json
            });
          });
      }
    //   handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   }
    // previewFile() {
    //     var preview = document.getElementById('thumbnail');
    //     const file = document.getElementById(this.file_id).files[0];
    //     var reader  = new FileReader();
      
        
    //     reader.addEventListener("load", function () {
    //       preview.src = reader.result;
    //    }, false)
      
    //     if (file) {
    //       reader.readAsDataURL(file);
    //     }
    //   }

    // handleSubmit(event) {
        
    //     event.preventDefault();
    //     const file = document.getElementById(`thumbnail-${id}`).src;
    //     const prod_id = event.target.id;
    //     const data = {
    //         id:event.target.id,
    //         product_code: event.target.product_code,
    //         category:event.target.category,
    //         description:event.target.description,
    //         cost:event.target.cost,
    //         price:event.target.price,
    //         qty_on_hand:event.target.qty_on_hand,
    //         is_active : event.target.is_active,
    //         image_data: file
    //       };
    //       fetch(`/api/products/update/${prod_id}`, {
    //       method:'POST',
    //       body: data
    //     })
    //     .then(alert("Product has been updated."));
        
       
    // }

    // handleDelete(event) {
        
    //     event.preventDefault();
    //     const id = event.target.id;
    //       fetch(`/api/products/delete/${id}`, {
    //       method:'POST'
    //     })
    //     .then(alert("Product has been deleted."));
        
       
    // }
    //  renderProducts(product) {
    //      const id=productData.id;
    //      const category=productData.category;
    //      const product_code=productData.product_code;
    //      const description=productData.description;
    //      const cost=productData.cost;
    //      const price=productData.price;
    //      const qty_on_hand=productData.qty_on_hand;
    //      const is_active = productData.is_active;
    //      const image_data = productData.image_data
    //      const categories=['Freshwater', 'Saltwater','Dry_Goods']
      
    //      let optionItems = categories.map((category)=>
    //       <option key={category}>{category}</option>
    //       );
    //       //returns one table row which is its own form to edit and submit changes to each product
    //     return (

    //         <tr key={id}>
    //         <form id={id} onSubmit={this.handleSubmit}>
    //             <td><select name={`category`} value={category} form={`form-${id}` }
    //         onChange={this.handleInputChange}>{optionItems}</select></td>
    //             <td><input
    //                     name={`product_code-${id}`}
    //                     type="text"
    //                     onClick={this.select}
    //                     value={product_code}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`description-${id}`}
    //                     type="text"
    //                     onClick={this.select}
    //                     value={description}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`cost-${id}`}
    //                     type="Number"
    //                     onClick={this.select}
    //                     value={cost}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`price-${id}`}
    //                     type="Number"
    //                     onClick={this.select}
    //                     value={price}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`qty_on_hand-${id}`}
    //                     type="Number"
    //                     onClick={this.select}
    //                     value={qty_on_hand}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`is_active-${id}`}
    //                     type="Checkbox"
    //                     onClick={this.select}
    //                     checked={this.state.is_active}
    //                     value={is_active}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     name={`product_code-${id}`}
    //                     type="Number"
    //                     onClick={this.select}
    //                     value={product_code}
    //                     onChange={this.handleInputChange} /></td>
    //             <td><input
    //                     type="file" 
    //                     id={`file-${id}`} 
    //                     accept="image/*" 
    //                     onChange={this.previewFile.bind(this)}>
    //                     <img 
    //                         id="thumbnail"
    //                         alt="Add-image"
    //                         className="thumb" 
    //                         src={image_data} 
    //                         height="50"
    //                         width="75"
    //                     />
    //                 </input>
    //                     </td>
    //             <td><input
    //                     type="hidden"
    //                     id="id"
    //                     value={id}
    //                 />
    //                     </td>
    //             <td><button onClick={this.handleSubmit} className='btn btn-sm btn-secondary'>Update</button>
    //             <button onClick={() => this.deleteProduct()}>x</button></td>
    //         </form>
    //         </tr>
            
    //     )
    //  }

    renderProducts() {
        return   _.map(this.state.products, product => {
            return (
                <ItemForm className="item-form" key={product.id} product={product}>
               </ItemForm>
            )
        });
       }
    render() {
        return(

            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Product Code</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Retail Price</th>
                        <th>Quantity</th>
                        <th>Active</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProducts()}
                </tbody>
            </table>
        )   
    }
}

export default ProductTable; 