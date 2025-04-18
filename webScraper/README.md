# 🕵️ Job Scraping and Filtering Pipeline

![Python Version](https://img.shields.io/badge/python-3.8%2B-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)

A data-driven pipeline for scraping and filtering **IT job listings** from [emprego.sapo.pt](https://emprego.sapo.pt), focusing on opportunities in **Lisbon** and **International** markets. Designed with a modular and efficient approach, the project automates data collection, cleansing, and export in **JSON format** for easy integration or analysis.

---

## 📋 Project Overview
- Web scraping solution targeting **Lisbon** and **International** IT job offers  
- Automated using **Selenium** and **BeautifulSoup** for dynamic content interaction  
- Extracts structured job data and exports clean datasets in **UTF-8 JSON**  
- Handles **pagination**, **cookie popups**, and **variable HTML structures**

---

## 🔍 Key Features
- Automatic handling of:
  - Cookie consent popups  
  - Page scrolling and pagination  
  - Different HTML layouts (Lisbon vs. International jobs)
- Data fields extracted:
  - **Job title**, **URL**, **company name**, **location**  
  - **Job description**, **employment type**, **posting date**
- Two-stage filtering pipeline:
  - **Initial validation** and formatting  
  - **Advanced duplicate removal**
- Modular architecture with:
  - **Debug mode** for visual inspection  
  - **Page limit control** for scoped scraping  
  - **Error handling** for missing or malformed data

---

## 🧪 Development & Methodology
- Developed in **Python**, leveraging:
  - `Selenium` for web automation  
  - `BeautifulSoup` for HTML parsing  
  - `Pandas` for data filtering and processing
- Lightweight architecture using **generators** to reduce memory usage  
- Built-in **delays** for responsible scraping behavior  
- **UTF-8 support** ensures compatibility with special characters

---

## 💡 Output & File Management
- JSON files generated:
  - `vagas_filtradas.json` → Lisbon listings  
  - `vagas_filtradas_internacional.json` → International listings
- Automatic cleanup of old files before each execution  
- JSON structured for easy downstream analysis or integration

---