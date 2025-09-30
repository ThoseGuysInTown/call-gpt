async function scheduleOnboarding(functionArgs) {
  const { callerName, preferredTime } = functionArgs;
  console.log('GPT -> called scheduleOnboarding function');
  
  return JSON.stringify({ 
    confirmedTime: '2024-07-01 10:00 AM', 
    status: 'success',
  });
}

module.exports = scheduleOnboarding;