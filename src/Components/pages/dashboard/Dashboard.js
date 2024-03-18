import products from '../../../asyncMock'
import { addDoc,collection } from 'firebase/firestore'
import { db } from '../../../config/firebase'

const Dashboard = () => {

    const rellenar = () =>{
        products.forEach((product) => {
            let refCollection = collection(db,"products")
            addDoc(refCollection,product)
            
        });
        

    }
  return (
    <div>
        <button onClick={rellenar}>Rellenar base de datos</button>

    </div>
  )
}

export default Dashboard