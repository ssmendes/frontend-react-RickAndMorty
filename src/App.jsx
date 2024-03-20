import { useState } from 'react'
import axios from 'axios'
import imageLogo from './assets/rick-and-morty.png'
import Pagination from './Components/Pagination/Pagination'
import Cards from './Components/Cards/Cards'
import Modal from './Components/Modal/Modal'
import Loading from './Components/Loading/Loading'
import './App.css'

const App = () => {
  // Define variáveis de estado para o termo de busca, dados dos personagens, indicador de carregamento, exibição da lista de personagens e número total de páginas.
  const [searchTerm, setSearchTerm] = useState(''); // Armazena o termo de busca atual
  const [characters, setCharacters] = useState(null); // Armazena os dados dos personagens obtidos
  const [loading, setLoading] = useState(false); // Indica se os dados estão sendo carregados no momento
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total_pages, setTotalPages] = useState(1);


  const nextPage = () => {
    if (currentPage < total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = async (characterId) => {
    try {
      // Obtém os dados dos personagens do servidor com base no termo de busca e número da página fornecidos
      const response = await axios.get(`http://127.0.0.1:5000/character/${characterId}`);
      setSelectedCharacter(response.data.data); // Atualiza o estado dos personagens com os dados obtidos
    } catch(error) {
      console.error('Error fetching search results:', error); // Registra quaisquer erros que ocorram durante a obtenção de dados
    } 
  };
  
  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };  

  // Função para lidar com solicitações de busca
  const handleSearch = async () => {
    try {
        setLoading(true); // Define o estado de carregamento como verdadeiro para indicar que a obtenção de dados está em andamento
        // Obtém os dados dos personagens do servidor com base no termo de busca e número da página fornecidos
        const response = await axios.get(`http://127.0.0.1:5000/?name=${searchTerm}&page=${currentPage}`);
        setCharacters(response.data.data.character_list); // Atualiza o estado dos personagens com os dados obtidos
        setLoading(false)
    } catch(error) {
        console.error('Error fetching search results:', error); // Registra quaisquer erros que ocorram durante a obtenção de dados
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
        <img src={imageLogo} alt='Logo Rick and Morty' className='imagem-logo' />
        <div className='container-search'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search characters"
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
        
        {loading && <Loading />}

        {characters && (
          <div>
            <div className="cards-container">
              {characters.map(character => (
                <Cards key={character.id} character={character} handleCardClick={handleCardClick}/>
              ))}
            </div>
            <Pagination currentPage={currentPage} total_pages={total_pages} onPrevPage={prevPage} onNextPage={nextPage} onPageChange={onPageChange} />
            {selectedCharacter && <Modal character={selectedCharacter} onClose={handleCloseModal} />}
          </div>
        )}
    </div>
  );
}

export default App
