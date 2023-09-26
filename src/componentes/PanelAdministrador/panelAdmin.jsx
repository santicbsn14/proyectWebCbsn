import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTrash, faPenNib, faPlus} from  '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { createNews, updateNews, deleteNews } from '../MockService/newsRepository';
import { current } from "../MockService/Auth.js";
import './panelAdmin.css'
function PanelAdmin() {
  
  const navigate = useNavigate();
  const keyPanel = import.meta.env.VITE_REACT_APP_KEY_PANEL;

  useEffect(() => {
    // Verificar si el usuario está autenticado antes de cargar el componente
    current()
      .then((response) => {
        if (!response.status) {
          // Redirigir al usuario a la página de inicio de sesión si no está autenticado
          navigate(`/loginForAdmin/${keyPanel}`, { replace: true });
        }
      })
      .catch((error) => {
        navigate(`/loginForAdmin/${keyPanel}`, { replace: true });
      });
  }, []);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    newsBody: '',
    newsDatetime: '',
    imgPort: '',
    imgs: [],
    topics: [],
    status: true,
    category: '',
  });

  const [action, setAction] = useState('null');
  const [newsIdToDeleteOrEdit, setNewsIdToDeleteOrEdit] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let notify = (action)=>{
    if(action==='crear')toast.success('Haz agregado la noticia con exito')
    if(action==='editar')toast.success('Haz editado la noticia con exito')
    if(action==='eliminar')toast.warn('Haz eliminado la noticia')
  }
let notifyError = ()=>{
  toast.error('No se ha podido realizar')
}
  const handleNewsIdChange = (e) => {
    setNewsIdToDeleteOrEdit(e.target.value);
  };

  const handleAddElement = (name) => {
    setFormData({ ...formData, [name]: [...formData[name], ''] });
  };

  const handleRemoveElement = (name, index) => {
    const updatedArray = [...formData[name]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [name]: updatedArray });
  };

  const handleInputChangeArray = (e, index, name) => {
    const newValue = e.target.value;
    const updatedArray = [...formData[name]];
    updatedArray[index] = newValue;
    setFormData({ ...formData, [name]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try
    {
      if(action==='crear'){
        createNews(formData)
      notify(action)}
      if(action==='editar'){
        updateNews(formData, newsIdToDeleteOrEdit)
        notify(action)
      }
      if(action==='eliminar'){
        deleteNews(newsIdToDeleteOrEdit)
        notify(action)
      }
    }
    catch(error)
    {
      notifyError()
    }
  };

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <section className="container-fluid" style={{ marginTop: '10rem' }}>
      <main className="mainContact">
        <section className="sectioncon container-fluid my-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <button className='col-lg-12 btn' onClick={() => handleActionChange('crear')} style={{marginTop:'55px', backgroundColor:'rgb(203, 0, 0)', color:'yellow'}}><FontAwesomeIcon icon={faNewspaper} />Crear Novedad</button>
              <button className='col-lg-12 btn' onClick={() => handleActionChange('editar')} style={{marginTop:'55px', backgroundColor:'rgb(203, 0, 0)', color:'yellow'}}><FontAwesomeIcon icon={faPenNib} />Editar Novedad</button>
              <button className='col-lg-12 btn' onClick={() => handleActionChange('eliminar')} style={{marginTop:'55px', backgroundColor:'rgb(203, 0, 0)', color:'yellow'}}><FontAwesomeIcon icon={faTrash} />Eliminar Novedad</button>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 my-3">
              {action === 'crear' && (
                <div>
                  <h4>Crear novedad aquí!</h4>
                  <form className="row formularioCon" onSubmit={handleSubmit}>
                
                <div className="col-lg-6 col-md-12 col-sm-12">
                  
                  <label htmlFor="title" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="description" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="newsBody" className="form-label">
                    Cuerpo de Noticia
                  </label>
                  <textarea
                    className="form-control"
                    id="newsBody"
                    name="newsBody"
                    rows="6"
                    value={formData.newsBody}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="newsDatetime" className="form-label">
                    Fecha de Publicación
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="newsDatetime"
                    name="newsDatetime"
                    value={formData.newsDatetime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="imgPort" className="form-label">
                    Imagen de Portada
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imgPort"
                    name="imgPort"
                    value={formData.imgPort}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="category" className="form-label">
                    Categoría
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                    <div className="col-12 col-md-12 col-sm-12">
                      <label htmlFor="imgs" className="form-label">
                        Imágenes
                      </label>
                      {formData.imgs.map((img, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            className="form-control"
                            name="imgs"
                            value={img}
                            onChange={(e) => handleInputChangeArray(e, index, 'imgs')}
                            required
                          />
                          <button type="button" className='btn btnForms' onClick={() => handleRemoveElement('imgs', index)}>
                          <FontAwesomeIcon icon={faTrash}  color='yellow'/>
                          </button>
                        </div>
                      ))}
                      <button type="button"  className='btn btnForms'  onClick={() => handleAddElement('imgs')}>
                      <FontAwesomeIcon icon={faPlus} color='yellow'/>
                      </button>
                    </div>

                    <div className="col-12 col-md-12 col-sm-12" style={{marginTop:'4px'}}>
                      <label htmlFor="topics" className="form-label">
                        Temas
                      </label>
                      {formData.topics.map((topic, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            className="form-control"
                            name="topics"
                            value={topic}
                            onChange={(e) => handleInputChangeArray(e, index, 'topics')}
                            required
                          />
                          <button type="button" className='btn btnForms'  onClick={() => handleRemoveElement('topics', index)}>
                          <FontAwesomeIcon icon={faTrash} color='yellow'/>
                          </button>
                        </div>
                      ))}
                      <button type="button" className='btn btnForms' onClick={() => handleAddElement('topics')}>
                      <FontAwesomeIcon icon={faPlus} color='yellow'/>
                      </button>
                    </div>

                <div className="col-12 col-md-12 col-sm-12">
                  <label htmlFor="status" className="form-label">
                    Estado
                  </label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value={true}>Activo</option>
                    <option value={false}>Inactivo</option>
                  </select>
                </div>
                <div className="col-12 col-md-12 col-sm-12" style={{marginTop:'10px'}}>
                  <button type="submit" className="btn btnCards">
                    Enviar Noticia
                  </button>
                </div>
              </form>
                </div>
              )}
              {action === 'eliminar' && (
                <div>
                  <h4>Eliminar noticia ingresando ID</h4>
                  <form className="row formularioCon" onSubmit={handleSubmit}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label htmlFor="newsIdToDelete" className="form-label">
                        ID de Noticia a Eliminar
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="newsIdToDelete"
                        name="newsIdToDelete"
                        value={newsIdToDeleteOrEdit}
                        onChange={handleNewsIdChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-12 col-sm-12">
                      <button type="submit" className="btn btnCards">
                        Eliminar Noticia
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {action === 'editar' && (
                <div>
                  <h4>Editar noticia ingresando ID</h4>
                  <form className="row formularioCon" onSubmit={handleSubmit}>
                  <label htmlFor="newsIdToDelete" className="form-label">
                        ID de Noticia a Eliminar
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="newsIdToDelete"
                        name="newsIdToDelete"
                        value={newsIdToDeleteOrEdit}
                        onChange={handleNewsIdChange}
                        required
                      />
                <div className="col-lg-6 col-md-12 col-sm-12">
                  
                  <label htmlFor="title" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="description" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="newsBody" className="form-label">
                    Cuerpo de Noticia
                  </label>
                  <textarea
                    className="form-control"
                    id="newsBody"
                    name="newsBody"
                    rows="6"
                    value={formData.newsBody}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="newsDatetime" className="form-label">
                    Fecha de Publicación
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="newsDatetime"
                    name="newsDatetime"
                    value={formData.newsDatetime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="imgPort" className="form-label">
                    Imagen de Portada
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imgPort"
                    name="imgPort"
                    value={formData.imgPort}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="category" className="form-label">
                    Categoría
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-12 col-sm-12">
                      <label htmlFor="imgs" className="form-label">
                        Imágenes
                      </label>
                      {formData.imgs.map((img, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            className="form-control"
                            name="imgs"
                            value={img}
                            onChange={(e) => handleInputChangeArray(e, index, 'imgs')}
                            required
                          />
                          <button type="button" className='btn btnForms' onClick={() => handleRemoveElement('imgs', index)}>
                          <FontAwesomeIcon icon={faTrash}  color='yellow'/>
                          </button>
                        </div>
                      ))}
                      <button type="button"  className='btn btnForms'  onClick={() => handleAddElement('imgs')}>
                      <FontAwesomeIcon icon={faPlus} color='yellow'/>
                      </button>
                    </div>

                    <div className="col-12 col-md-12 col-sm-12" style={{marginTop:'4px'}}>
                      <label htmlFor="topics" className="form-label">
                        Temas
                      </label>
                      {formData.topics.map((topic, index) => (
                        <div key={index}>
                          <input
                            type="text"
                            className="form-control"
                            name="topics"
                            value={topic}
                            onChange={(e) => handleInputChangeArray(e, index, 'topics')}
                            required
                          />
                          <button type="button" className='btn btnForms'  onClick={() => handleRemoveElement('topics', index)}>
                          <FontAwesomeIcon icon={faTrash} color='yellow'/>
                          </button>
                        </div>
                      ))}
                      <button type="button" className='btn btnForms' onClick={() => handleAddElement('topics')}>
                      <FontAwesomeIcon icon={faPlus} color='yellow'/>
                      </button>
                    </div>

                <div className="col-12 col-md-12 col-sm-12">
                  <label htmlFor="status" className="form-label">
                    Estado
                  </label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value={true}>Activo</option>
                    <option value={false}>Inactivo</option>
                  </select>
                </div>
                <div className="col-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btnCards">
                    Enviar Noticia
                  </button>
                </div>
              </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <ToastContainer position="top-left"/>
    </section>
  );
}

export default PanelAdmin;


