// src/utils/fetchCareerData.js
export const fetchCareerData = () => {
  // Simulated fetch logic
  const careerTerms = ['Communication', 'Leadership', 'Teamwork'];
  // const dailyFacts = ["Did you know? The first job board was created in 1994.", "Over 70% of jobs are found through networking.", 
  const dailyFacts = [
    // "Did you know? Effective communication improves team productivity.",
    "Employers value communication skills above technical skills in most fields.",
    "Learning one new skill can increase your chances of a promotion by 25%.",
    "Remote work has increased by 159% since 2005.", "The average person changes jobs 12 times in their career.",
    "Only 15% of employees worldwide are engaged in their jobs.",
    "The healthcare industry is the fastest-growing sector, projected to grow by 14% through 2028.",
    "Cybersecurity jobs are among the highest in demand, with a 32% growth rate expected by 2028.",
    "The tech industry continues to offer the highest median salaries among career fields.",
    "Soft skills such as adaptability and problem-solving are increasingly sought after by employers.",
    "Women now hold 25% of computing jobs, a significant increase from previous years.",
    "Continuous learning and professional development are key factors in long-term career success."
  ];

  // You can also replace the above logic with actual fetch calls, like:
  // const response = await fetch('your-api-url');
  // const data = await response.json();

  return { careerTerms, dailyFacts };
};
