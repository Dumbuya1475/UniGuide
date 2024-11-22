// src/hooks/useCareerData.js
import { useState, useEffect } from 'react';

const useCareerData = () => {
  const [careerTerms, setCareerTerms] = useState([]);
  const [dailyFacts, setDailyFacts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State for any fetch errors

  useEffect(() => {
    // Check if careerTerms and dailyFacts are already in localStorage
    const savedCareerTerms = localStorage.getItem('careerTerms');
    const savedDailyFacts = localStorage.getItem('dailyFacts');

    if (savedCareerTerms && savedDailyFacts) {
      // If data exists in localStorage, use it
      setCareerTerms(JSON.parse(savedCareerTerms));
      setDailyFacts(JSON.parse(savedDailyFacts));
      setLoading(false); // Set loading to false since data is available
    } else {
      // Simulated fetch logic (replace with actual API if needed)
      const fetchData = async () => {
        try {
          // Simulating API call with a timeout
          const fetchedCareerTerms = [
            { term: 'Communication', definition: 'The ability to convey information effectively.' },
            { term: 'Leadership', definition: 'The action of leading a group or organization.' },
            { term: 'Teamwork', definition: 'The collaborative effort of a group to achieve a common goal.' },
          ];
          const fetchedDailyFacts = [
            'Did you know? Effective communication improves team productivity.',
            'Good leadership boosts morale and motivates teams.',
            'Teamwork is essential for project success.',
            "Employers value communication skills above technical skills in most fields.",
            "Learning one new skill can increase your chances of a promotion by 25%.",
            "Remote work has increased by 159% since 2005.",
            "The average person changes jobs 12 times in their career.",
            "Only 15% of employees worldwide are engaged in their jobs.",
            "The healthcare industry is the fastest-growing sector, projected to grow by 14% through 2028.",
            "Cybersecurity jobs are among the highest in demand, with a 32% growth rate expected by 2028.",
            "The tech industry continues to offer the highest median salaries among career fields.",
            "Soft skills such as adaptability and problem-solving are increasingly sought after by employers.",
            "Women now hold 25% of computing jobs, a significant increase from previous years.",
            "Continuous learning and professional development are key factors in long-term career success."
          ];

          // Simulate a delay before setting the state (can be removed when using real API)
          setTimeout(() => {
            // Set state and save to localStorage
            setCareerTerms(fetchedCareerTerms);
            setDailyFacts(fetchedDailyFacts);
            localStorage.setItem('careerTerms', JSON.stringify(fetchedCareerTerms));
            localStorage.setItem('dailyFacts', JSON.stringify(fetchedDailyFacts));
            setLoading(false); // Set loading to false after data is fetched
          }, 1000); // Simulated delay (1 second)
        } catch (err) {
          console.error('Error fetching career data:', err);
          setError('Failed to load career data.');
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []); // Empty array ensures this runs only once when the component mounts

  return { careerTerms, dailyFacts, loading, error };
};

export default useCareerData;
