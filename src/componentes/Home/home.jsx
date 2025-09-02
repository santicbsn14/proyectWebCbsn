import React from "react";
import Video from "../Video/video";
import './home.css'
import NewsListContainer from "../NewsListContainer/NewsListContainer";
import AgendaListContainer from "../Agenda/AgendaListContainer";
function Home() {



  return (
    <main className="mainIndex" >
      <Video />
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-12" style={{ paddingTop: '30px', paddingBottom: '700px', paddingRight: '0px', paddingLeft: '0px' }}>
            <AgendaListContainer />
          </div>
        </div>
      </section>
    </main>
  )
}
export default Home