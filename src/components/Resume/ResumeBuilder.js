import React from "react";

export function Profile() {
	return (
		<div className="Profile profile">
			<div className="profile-info">
				<ProfileInfo
					profileName="Matt Kam"
					careerTitle="Front End Web Developer"
					profilePic="./profile-1.jpg"
				>
					Visual pirate, code monkey, pixel pusher and perpetual hobbyist.
					Making applications look and function better, one page at a time. Can
					be found roaming about in the wilds of West Los Angeles.
				</ProfileInfo>
			</div>
			<div className="social-links">
				<SocialLink
					imgUrl="./logo-linkedin.png"
					altTag="Linked In"
					linkUrl="https://www.linkedin.com/in/mattkam/"
				/>
				<SocialLink
					imgUrl="./logo-github.png"
					altTag="Github"
					linkUrl="https://github.com/MatthewKam"
				/>
				<SocialLink
					imgUrl="./logo-codewars.png"
					altTag="Code Wars"
					linkUrl="https://www.codewars.com/users/kamaeleo"
				/>
			</div>
		</div>
	);
}

export function ProfileInfo(props) {
	const { profilePic, profileName, careerTitle, children } = props;
	return (
		<div className="Profile-Info">
			<div className="Profile-Pic">
				<img src={require(`${profilePic}`)} alt="Profile picture" />
			</div>
			<div className="Profile-Text">
				<h1>{profileName}</h1>
				<h3>{careerTitle}</h3>
				<p>{children}</p>
			</div>
		</div>
	);
}

export function SocialLink(props) {
  const { imgUrl, altTag, linkUrl, linkText, linkTitle } = props;
  let linkedImage = imgUrl ? <img src={require(`${imgUrl}`)} alt={altTag} />: '';
  let linkedText = linkText ? <span>{linkText}</span>: '';
  let linkedTitle = linkTitle ? <h2>{linkTitle}</h2>: '';
	return (
		<div className="Social-Links">
      {linkedTitle}
			<a href={linkUrl} target="_blank" rel="noopener noreferrer">
				{linkedImage}
        {linkedText}
			</a>
		</div>
	);
}

export function JobExperience() {
	return (
		<div className="Job-Experience">
			<Job
        jobTitle="Senior Front End Web Developer"
        companyName="Ad Exchange Group" 
        startDate="Dec 2017"
        endDate="Oct 2019"
      >
				<p>- Developed internal dashboard, built with React. Created better UX/UI
					for internal team to help streamline advertiser sign up and reduce
					friction for customer retention.</p>
				<p>- Built out the technology side of the branded department. Worked
					directly with clients, creative directors, business development, and
					management to create solutions that helpoed scale and promote
					small/medium businesses.</p>
				<p>- Managed multiple development projects and supervised junior
					developers to ensure department success.</p>
				<p><a href="#projects"><b>Projects:</b></a> Bulletproof Coffee, Playboy, Nightshift Goods, Moscow Copper,
					Rastaclat, Instantly Ageless, Good Gummy, Nano Glutathione, Steath
					Flashlights, Beard Club, etc.</p>
			</Job>

      <Job
        jobTitle="Front End Web Developer"
        companyName="Ad Exchange Group" 
        startDate="Dec 2014"
        endDate="Dec 2017"
      >
				<p>- Built reusable front end components to streamline development times with faster pushes to production, uniform code standards and uploaded the code to git. </p>
        <p>- Worked with backend developers to integrate better tracking principles to help make better business decisions for the future. Optimized pages, increasing page performance and reduced load times to help increase customer engagement and retention.</p> 
        <p>- Managed the relationship with external team of front end developers to make sure timelines were met and to check that the quality of work was kept up to internal standards.</p>
			</Job>

      <Job
        jobTitle="Front End Web Developer - Contract"
        companyName="Ad Exchange Group" 
        startDate="Oct 2014"
        endDate="Dec 2014"
      >
				<p>- Built sales funnels, landing pages, splash pages, and marketing emails. Worked with designers and advertisers to optimize sales flows based on split testing data. </p>
        <p>- Worked directly with advertisers to create custom pages catered to individual products and market needs. </p>
        <p>- Created white labeled pages to inject advertiser products in order to reduce design and build times and to increase marketshare and customer retention.</p>
			</Job>

      <Job
        jobTitle="Front End Web Developer/Designer"
        companyName="Freelance" 
        startDate="August 2014"
        endDate="Current"
      >
				<p>- Consulted with clients to uncover specific business needs and expected timelines. </p>
        <p>- Recommended industry standards and developed responsive, mobile first, pages to help reach new customers and scale with new technologies. </p>
        <p>- Provided ongoing maintenance to ensure seamless transitions towards finalizing project scope.</p>
        <p><a href="#projects"><b>Projects:</b></a> Sen Beauty, Hot Sauce for Your Butthole (Steve-O Hotsauce), XYZ Clothing (skate brand), Ladue Nails, Aloha Drapery, Kreative Kamaaina, etc.</p>
			</Job>
		</div>
	);
}

export function Job(props) {
	const { jobTitle, companyName, startDate, endDate, children } = props;
	return (
		<div className="Job">
      <div className="Job-Title">
        <h2>{jobTitle}</h2>
        <h3>{companyName} <span>{startDate}{' - ' + endDate}</span></h3>
      </div>
			<div className="Job-Info">{children}</div>
		</div>
	);
}

export function SideNotes() {
	return (
    <div className="SideNotes">
      <ExtraStuff
        extraTitle="Extra Skills"
        extraClass="Extra-Skills"
      >
        Shopify, Adobe Illustrator, Adope Photoshop, Optimizely, AWS, PostgresQL, mySQL, Hotjar, Google Analytics
      </ExtraStuff>
      <ExtraStuff
        extraTitle="Extra Info"
        extraClass="Extra-Info"
      >
        I live on the Westside. My team won first place in our division at the Catalina Crossing - US Outrigger Championships in 2017. I was a surgery technician for a Maxillofacial/Oral surgeon before becoming a web developer in 2014. My family is from Hawaii and I am 4th generation Asian-American, which means I can't speak any of my heritage languages. However, I can speak React, HTML, CSS, Javascript and a little Spanish ;)
      </ExtraStuff>

      <Education/>
      <LinkedList/>
    </div>
  );
}

export function ExtraStuff(props) {
  const { extraTitle, children, extraClass } = props;
	return (
    <div className={`Extra-Stuff` + (extraClass ? ` ${extraClass}`:``)}>
      <h1>{extraTitle}</h1>
      <p>{children}</p>
    </div>
  );
}

export function Education() {
	return (
    <div className="Education">
      <h1>School</h1>
      <School 
        areaOfStudy="Web Development"
        schoolName="General Assembly"
      />
      <School 
        areaOfStudy="Fine Arts"
        schoolName="El Camino Community College"
      />
      <School 
        areaOfStudy="Business Management/Fine Arts"
        schoolName="University of California, Riverside"
      />
    </div>
  );
}

export function School(props) {
  const { areaOfStudy, schoolName } = props;
	return (
    <div className="School">
      <h2>{areaOfStudy}</h2>
      <h3>{schoolName}</h3>
    </div>
  );
}

export function LinkedList() {
	return (
    <div className="Linked-List">
      <SocialLink
        linkTitle="Linked In"
        linkUrl="https://www.linkedin.com/in/mattkam/"
        linkText="linkedin.com/in/mattkam/"
      />
      <SocialLink
        linkTitle="Github"
        linkUrl="https://www.github.com/MatthewKam"
        linkText="github.com/MatthewKam"
      />
      <SocialLink
        linkTitle="Codewars"
        linkUrl="https://www.codewars.com/users/kamaeleo"
        linkText="codewars.com/users/kamaeleo"
      />
    </div>
    
  );
}

export function ResumeBuilder(props) {
	return (
    <div className="ResumeBuilder">
      <Profile/>
      <JobExperience/>
      <SideNotes/>
    </div>
  );
}

export default ResumeBuilder;
