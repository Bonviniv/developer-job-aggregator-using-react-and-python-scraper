# Developer Job Aggregator using React and Python Scraper

A fullstack application that collects and displays **developer job offers** by combining **web scraping** and **API integration**. The project features a frontend built with **React** and a backend scraper built with **Python**, offering a centralized place to explore, filter, and apply to job listings.

## 📋 Project Overview
- Aggregates **developer job listings** from APIs and custom Python web scrapers
- Interactive **React interface** to browse, filter, and access job offers
- Uses **JSON** as a common data format between scraping and display
- Provides direct **application links** to job postings

## 🔍 Key Features
- Custom **Python bot** that scrapes `emprego.sapo.pt` for tech jobs
- Integration with public job **APIs** (e.g., Remotive, ITJobs, Adzuna)
- Filtering, sorting, and visualization of job data
- Option to load **offline-saved listings** from JSON
- Frontend displays company, title, location, date, and apply link

## 💡 Additional Functionalities
- Frontend filters by job location, keywords, and recency
- Supports dynamic data loading from multiple JSON and API sources
- Modular scraping logic for easy adaptation to new job sites
- Clear separation between **Lisbon** and **International** listings

## 🧪 Development & Methodology
- Developed using:
  - **React** for the web interface
  - **Python** with **Selenium** and **BeautifulSoup** for scraping
  - **Pandas** for data processing
  - **JSON** for data interchange and storage
- Folder structure separates:
  - `/bot/` for Python scripts
  - `/stackhunter/` React app source
- Deployment-ready via GitHub Pages for the React frontend
- Version-controlled with **Git**

---

A technology-driven job board solution tailored for developers. Combines scraping automation and modern UI design to streamline the job search experience. Future improvements may include database storage, user preferences, and notification systems.
