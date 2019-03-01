import Link from 'next/link';
import Header from '../components/header';

const Index = () =>(
    <div>
        <Header />
        <style jsx>{`
            input{
                margin-right: 10px;
            }
            label{
                margin-right: 10px;
            }
        `}</style>
        <div>
            <label>Masukan Site Id</label>
            <input type='text' name='site_id'/>
        </div>
        <div>
            <h1>Pilih Config</h1>
            <input type='checkbox' name='template' onChange={this.handleCheckClick}/>
            <label>Template</label>
            <select disabled>
                <option value=''>-- Pilih Template --</option>
            </select>
        </div>
    </div>
)

export default Index