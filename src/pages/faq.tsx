const faq = () => {
  return (
    <div className="columns-2">
      <p>Q: What is TweetMood?</p>
      <p>A: TweetMood is an app that uses natural language processing to analyze tweets from a user and describe their personality and emotions.</p>
      <p>Q: Is this app for commercial use? </p>
      <p>A: No, TweetMood is for educational purposes only and does not have any commercial use.</p>
      <p>Q: Is the information collected by the app private? </p>
      <p>A: No, the information analyzed by the app is all publicly available tweets, nothing private is being collect.</p>

      <p className="break-before-column">Q: Is this app in compliance with Twitter&apos;s terms of service?</p>
      <p>A: Yes, the app only analyzes publicly available tweets and is in compliance with Twitter&apos;s terms of service.</p>
      <p>Q: Is there any risk of using this app?</p>
      <p>A: No, there is no risk associated with using this app as it only analyzes publicly available information.</p>
      <p>Q: Why should I use this app?</p>
      <p>A: The app can be used for educational purposes, such as learning more about natural language processing and understanding how emotions and personalities can be determined from tweets.</p>
    </div>
  )
}

export default faq