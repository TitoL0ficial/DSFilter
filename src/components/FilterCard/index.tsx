import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}

type FormData = {
    min?: number;
    max?: number;
}

export default function FilterCard({ onSearch } : Props) {

    const [formData, setFormData] = useState<FormData>({
        min: undefined,
        max: undefined
    })

    
    function handleInputChange(event: any) {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setFormData(formData);
        onSearch(formData.min, formData.max);
    }

    return(
        <div className="filter-card-container mt30">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="input-box">
                        <input 
                            name="min"
                            value={formData.min || ''}
                            type="text" 
                            placeholder="Preço mínimo"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-box">
                      <input 
                            name="max"
                            value={formData.max || ''}
                            type="text" 
                            placeholder="Preço máximo"
                            onChange={handleInputChange}
                        />  
                    </div>
                    <div className="filter-button">
                        <button type="submit">Filtrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}