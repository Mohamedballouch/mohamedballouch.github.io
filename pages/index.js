const Page = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">M.BALLOUCH</a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Mohamed Ballouch</h1>
          <h3>And I'm a <span>Data Scientist - Gen AI | Machine Learning Engineer</span></h3>
          <p>Passionate Data Scientist and Machine Learning Engineer with 5 years of experience in designing, refining, and deploying machine learning algorithms. Proficient in Large Language Models (LLMs) and prompting techniques, with a keen interest in leveraging data to drive business solutions.</p>
          <div className="social-media">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="http://www.linkedin.com/in/mohamed-ballouch"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          </div>
          <a href="#" className="btn">Download CV</a>
        </div>
        <div className="home-image">
          <img src="https://avatars.githubusercontent.com/u/5404735?v=4" alt="M.BALLOUCH" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image">
          <img src="https://avatars.githubusercontent.com/u/5404735?v=4" alt="M.BALLOUCH" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Data Scientist - Gen AI | Machine Learning Engineer</h3>
          <p>With 5 years of experience, I specialize in designing, refining, and deploying machine learning algorithms. I'm proficient in Large Language Models (LLMs) and prompting techniques, and I'm committed to leveraging data to drive innovative business solutions. My expertise spans a wide range of frameworks, including TensorFlow, Rasa, and LangChain. I'm dedicated to collaborating closely with clients, understanding their unique needs, and delivering ethical and beneficial AI-driven results.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">My <span>Skills</span></h2>
        
        <div className="services-container">
          
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Machine Learning</h3>
            <p>Deep Learning, Neural Networks, NLP, Large Language Models (LLMs), Random Forests, SVM, Reinforcement Learning</p>
            <a href="#" className="btn">Read More</a>
          </div>
        
          <div className="services-box">
            <i className="bx bxs-data"></i>
            <h3>Data Processing</h3>
            <p>Data cleaning, preprocessing, and analysis using Python (Pandas, NumPy, Scikit-learn) and SQL. Proficient in data visualization with Matplotlib, Seaborn, and PowerBI.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          
          <div className="services-box">
            <i className="bx bx-cloud"></i>
            <h3>Cloud & DevOps</h3>
            <p>Experience with AWS (SageMaker, Lambda, EC2), Azure ML, Docker, and version control using Git. Familiar with CI/CD practices and tools like Jenkins and JIRA.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>

      </section>
    
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">

          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>RAG System for Insurance</h4>
              <p>Developed and deployed a Retrieval-Augmented Generation system for insurance applications using AWS and serverless architectures.</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>Internal Chatbot with GPT</h4>
              <p>Designed an internal chatbot using GPT (ChatGPT), integrating it with LangChain, OpenAI's APIs, and VectorDB(Pinecone).</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>
          
          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>Object Detection in Video Surveillance</h4>
              <p>Enhanced object detection capabilities in video surveillance systems using deep learning techniques with Python, TensorFlow, and OpenCV.</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>
          
          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>Sentiment Analysis Web App</h4>
              <p>Developed a web application for Sentiment Analysis on Social Media Data using ML models and NLP techniques.</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>
          
          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>Time-series Analysis for Churn Prediction</h4>
              <p>Employed time-series analysis to predict data usage patterns and subscription churn, enabling proactive strategies.</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>
          
          <div className="portfolio-box">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rf__8xWSTniXUDcGvnC3Hw.jpeg" alt=""/>
            <div className="portfolio-layer">
              <h4>IoT Data Analysis</h4>
              <p>Analyzed and visualized IoT data using Python libraries like SciKit-Learn, Pandas, and TensorFlow.</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>

        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn"/>
        </form>
      </section>
      
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Mohamed Ballouch</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </footer>
    </>
  )
}

export default Page;