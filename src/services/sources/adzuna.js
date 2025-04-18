import axios from 'axios';

const ADZUNA_CONFIG = {
  APP_ID:
  APP_KEY: 
};

export async function searchAdzuna() {
  try {
    const response = await axios.get('/v1/api/jobs/gb/search/1', {
      params: {
        app_id: ADZUNA_CONFIG.APP_ID,
        app_key: ADZUNA_CONFIG.APP_KEY,
        results_per_page: 50,
        what: 'software developer'
      },
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.data?.results) {
      return [];
    }

    return response.data.results.map(job => ({
      id: `adzuna-${job.id}`,
      title: job.title,
      company: job.company?.display_name || 'Unknown',
      location: job.location?.display_name || 'Unknown',
      type: job.contract_time|| 'Unknown' ,
      salary: job.salary_min ? `£${job.salary_min} - £${job.salary_max}` : null,
      postedDate: job.created,
      applyLink: job.redirect_url,
      description: job.description || '',
      source: 'Adzuna'
    }));
  } catch (error) {
    console.error('Adzuna API Error:', error.message);
    return [];
  }
}
