import React from "react";

function Body() {
    return (
        <body>
          <header><img /></header>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Activities</li>
              <li>Get Involved</li>
            </ul>
          </nav>
        <main>
        <section class="“aboveFold”">
          <h2>Williams Family Foundation for Africa welcomes you!</h2>
        </section>

        {/* Below section is grid */}
        <section class="“atAGlance”">
          <div class="“glanceText”">
            <h2>
              Williams Family Foundation for Africa
              <span style="color: red;">At a Glance</span>
            </h2>
            <p>
            The Williams Family Foundation for Africa (WFFA) focuses on
            development projects in underserved areas in east Africa, especially
            the countries of Zambia and Malawi. We have worked on and invested
            in projects to improve education, create sustainable farming, and
            support income generation to stimulate a better economy. Our
            organization hopes to expand on the programs and services we
            provide, The amount of aid these projects need well exceeds the
            level of financial support we, alone, can supply.
            </p>
            <h3>WE NEED YOUR HELP</h3>
            <p>
            Whether you are looking for ways to contribute financially,
            volunteer with us, or are looking to become a partner, click below
            to see more on how you can get involved.
            </p>
            <button class="getInvolved">Get Involved</button>
          </div>
          <img />
        </section>
        <section class="activitiesHead">
          <div>
            <h2>Activities</h2>
            <p>What we do</p>
          </div>
        </section>
        <section class="activitiesBody">
          <div class="activityCard">
            <img src="" alt="" />
            <h2>Stimulate Economic Growth</h2>
            <p>
            With our organization’s mission always in mind, we strive to find
            new strategies for dealing with this challenge. Sustainability is
            about long term solutions. Only by supporting small business start
            ups or providing vocational technical training can we help empower
            people to generate their own income. Contact us to learn more about
            our commitment to this cause.
            </p>
          </div>
          <div class="activityCard">
            <img src="" alt="" />
            <h2>Improve Education</h2>
            <p>
            We at WFFA are dedicated to improving education, especially in rural
            areas, through our partnership with Backpacks for Africa. We
            recognize how important it is for students to have even the basic
            school supplies: paper and pencils. We also support technical
            training and sewing projects that enable young women to make clothes
            for themselves and their families and even create their own
            businesses.
            </p>
          </div>
          <div class="activityCard">
            <img src="" alt="" />
            <h2>Build Stronger Communities</h2>
            <p>
            With this initiative, our goal is to promote great opportunities for
            those in need. With access to the right resources, people can become
            empowered by their own abilities and gain the confidence to fulfill
            their potential. Learn more about our work by getting in touch with
            our team today.
            </p>
          </div>
        </section>
        <section class="contact">
          <h2>Contact Williams Family Foundation</h2>
          <p>williamsfamilyfdn@gmail.com</p>
        </section>
        <section class="footerImage"></section>
      </main>
      <nav class="footerNav"></nav>
    </body>

    )
} 

export default Body;