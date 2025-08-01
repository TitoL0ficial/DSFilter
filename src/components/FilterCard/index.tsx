import './styles.css';

export default function FilterCard() {
    return(
        <div className="filter-card-container">
            <form>
                <div className="form-content">
                    <div className="input-box">
                        <input type="text" placeholder="Preço mínimo" />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Preço máximo"/>  
                    </div>
                    <div className="filter-button">
                        <button type="submit">Filtrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}