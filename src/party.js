'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Party extends React.Component {
  constructor() {
    super();
  }

  render (){
    return (
      <div id="party" className="party">
        <div className="bio-wrapper">
          <h3>Marvelous Groomsmen</h3>
          <div className="bio groom">
            <h4>Jeremy Hsu</h4>
            <p>Jeremy is an obnoxious Texan that had no idea he so obnoxiously loved his home state until he moved to California in 2010. He is a web developer/platform engineer. Music is a huge part of his life, and Kin was awesome enough to come out to countless events and concerts throughout their time in San Diego, which really cemented the base of their friendship. Eventually, Jen decided to join the two of them, and all of a sudden Jeremy became the perpetual third-wheel from 2011 to present day. After going on many taco/burger/noodle adventures, having many memory lapsed nights at the same club, attending 5 Coachella festivals together, and seeing Jen bully Kin all the time, he couldn’t imagine a better couple to have third-wheeled for.</p>
          </div>
          <div className="bio groom"><h4>Corey Casado</h4><p>Corey has known Kin and Jen since High School. Corey and Kin realized very quickly that they had a mutual compassion for a lot of the same things: video games, TV shows, and computers. They even had the goal to someday start up their own video game company called Kinetic Core (get it?). Combine this with the fact that they were both very active in high school speech & debate and swim and you've got a recipe for one of the best friendships ever. Corey is now a full stack engineer and coincidentally works in the building across from Kin's office! In HS,  he was never quite as close with Jen as he was with Kin. However, it was evident from the moment they started dating that she was one of the most important things in his life. Corey and Jen's friendship has only grown over time and today Jen is among the best friends he has. He respects, treasures, and loves them both.</p></div>
          <div className="bio groom"><h4>Richard Ho</h4><p>Richard is a software developer from Southern California and has known Kin for 20 years (almost his whole life). They spent much of their youth together playing video games (actually it’s still what they’re doing), but got separated in high school. However, they ended up going to the same college and enrolled in the same major and picked up their friendship where it left off. Richard, a huge sports fan, loves to play and participate in all kinds of sports. His dream is to hopefully retire around 40 and spend a ton of time with his kids and travel after that. There were multiple trips Richard and Kin share that were memorable such as their middle school Washington, DC trip and their post-college trip to Japan. With Jen, although there are a lot of great memories from tailgating, going to Vegas, and going out, his favorite memory of Jen is when he was in the hospital, she visited him the most frequently, picking him up from a very low point of his life.</p></div>
          <div className="bio groom"><h4>Edward Chang</h4><p>Edward met Kin during college but didn't get close to him until the frequent visits to visit San Diego when Kin was working for Disney. Kin and him have many similar interests, but very differing opinions within those interests such as their love for sports (Ed is a die hard Warriors fan). Jen led the infinite path to correcting Edward’s posture. Together, they recently went to Machu Picchu together and hiked the ceremonial four-day 26-mile Incan trail. Edward never recommends food to Kin because he is scared of his judgment.</p></div>
        </div>
        <div className="bio-wrapper">
          <h3>Lovely Bridesmaids</h3>
          <div className="bio bride"><h4>Polly Ho</h4><p>Polly is Jen’s youngest sister and currently works as a media planner. She loves eating and snacking. Growing up she had a major sweet tooth and it still hasn't gone away! She had a Mexican food only phase, and now it's Thai food and ice cream. She loves being their little sister and spending time with them even if they are somewhat demanding and princessy, blind when looking for things, or forgetful. She loves dogs especially their corgi Chibbi!! She thanks Kin for adopting him since everyone moved out of their Mom's house. Her hobbies include getting her namaste on with yoga, potting succulents, cleaning, asking Google questions, flea market shopping, antiquing, collecting jewelry rings, and walking Chibbi. She wants to be a world traveler one day! Polly's top 3 places she wants to go to are: Sweden, Australia, and Vietnam. </p></div>
          <div className="bio bride"><h4>Alice Nguyen</h4><p>Alice was born in Norway, but grew up in Northern California. She met Jen in physical therapy school 5 years ago. She is now a physical therapist, specializing in Women's Health/Pelvic Problems (ie. yes, she fixes vaginas ;). She enjoys yoga, hates onions and cilantro, and will meticulously pick it out from her food. Alice loves dogs and is obsessed with her two chihuahuas, Pixel and Vader. She aspires to work only part-time in physical therapy so that she can rescue dogs! She would love to travel and learn another language. A favorite memory of Kin and Jen is when they went on a double-date together to their grad school prom and Kin got a black eye because he ran into a pole while looking for his parked car after the party.</p></div>
          <div className="bio bride"><h4>Irene Ho</h4><p>Irene has known Jen and Kin for over 10 years. Irene now works in a business management firm. She loves to eat tacos, any and all vegetables, and green smoothies. Her random memory about Jen is when Jen used to not like avocados or guacamole (she has since converted) and also when they went swimming in the ocean in Hawaii. She also remembers Kin taking Jen to their high school prom in his new and decorated Mini Cooper! Irene’s guilty pleasures include celebrity gossip and lately, Shondaland.</p></div>
          <div className="bio bride"><h4>Michelle Lin</h4><p>Michelle, or "Moosh," is from SoCal and attended UCLA studying Applied Mathematics. She currently works as a Human Resources Executive for Target. One of her biggest passions in life is the love of music and she has been playing violin and piano for more than 15 years. More recently, she has started to find the love of dancing hip hop, so when people say it's "Moosh type of music" or a "Moosh type of bar," all her friends know what that means. Moosh definitely appreciates Kin's witty humor and enjoys the constant jokes he has about her, but Moosh seriously sees Kin as an older brother who's always there for her. A favorite memory of Jen is when they first became friends they risked their lives on a dangerous hike in Malibu, but of course Moosh acted as if she wasn't scared and played it cool, when she was actually terrified of that hike due to the height of it. Many other adventures have followed after that – their friendship is truly one of a kind.</p></div>
        </div>
      </div>
    );
  }

}

module.exports = Party;
