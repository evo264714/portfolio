import './Portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Projects</h2>

            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Melody Muse</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://summer-camp-school-4a8e2.web.app/" className='btn' target='__blank'>Live Site</a>
                        <a href="https://github.com/evo264714/summer-camp-learning-school-client.git" className='btn btn-primary' target='__blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Play Land</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://toy-market-b3ec7.web.app/" className='btn' target='__blank'>Live Site</a>
                        <a href="https://github.com/evo264714/toy-marketplace-client.git" className='btn btn-primary' target='__blank'>GitHub</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Chefs Table</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://chefs-table-4986c.web.app/" className='btn' target='__blank'>Live Site</a>
                        <a href="https://github.com/evo264714/chef-recipe-hunter-client-.git" className='btn btn-primary' target='__blank'>GitHub</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;