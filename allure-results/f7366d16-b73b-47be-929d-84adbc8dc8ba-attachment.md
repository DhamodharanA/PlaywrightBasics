# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewOrange.spec.js >> Window Handling
- Location: tests\NewOrange.spec.js:20:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM"
Received: "OrangeHRM: All in One HR Software for Businesses | OrangeHRM"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "OrangeHRM: All in One HR Software for Businesses | OrangeHRM"

```

```yaml
- dialog "This website uses cookies":
  - img "logo"
  - link "Cookiebot by Usercentrics - opens in a new window":
    - /url: https://www.cookiebot.com/en/what-is-behind-powered-by-cookiebot/?utm_source=banner_cb&utm_medium=referral&utm_content=v2
  - tabpanel "Consent":
    - heading "This website uses cookies" [level=2]
    - paragraph:
      - text: We use cookies to improve your browsing experience. By continuing to use this website, you agree to our use of cookies in accordance with our
      - link "Privacy Policy":
        - /url: https://www.orangehrm.com/policies/orangehrm-privacy-policy
      - text: .
    - group "Consent Selection":
      - text: Consent Selection
      - strong: Necessary
      - checkbox "Necessary" [checked] [disabled]
      - strong: Preferences
      - switch "Preferences"
      - strong: Statistics
      - switch "Statistics"
      - strong: Marketing
      - switch "Marketing"
    - link "Show details":
      - /url: "#"
  - button "Allow all"
  - button "Allow selection"
  - button "Deny"
  - button "Close banner"
- text: Webinar - AI's Impact on Modern HR -
- link "Register Now":
  - /url: https://orangehrm.com/resources/webinars
- button "×"
- navigation:
  - link "OrangeHRM Logo":
    - /url: /
    - img "OrangeHRM Logo"
  - list:
    - listitem
    - listitem:
      - link "Solutions":
        - /url: /#
    - listitem:
      - link "Why OrangeHRM":
        - /url: /#
    - listitem:
      - link "Resources":
        - /url: /#
    - listitem:
      - link "Company":
        - /url: /#
    - listitem:
      - link "Pricing":
        - /url: /pricing
  - list:
    - listitem:
      - button "Language": Global
    - listitem:
      - link "Book a Free Demo":
        - /url: /book-a-free-demo
        - button "Book a Free Demo"
    - listitem:
      - link "Contact Sales":
        - /url: /contact-sales
        - button "Contact Sales"
- main:
  - heading "Streamline All Your HR Needs on One Intuitive Platform" [level=1]
  - paragraph: OrangeHRM is a flexible, all in one HR software that helps businesses of all sizes manage their people, streamline HR processes, and drive growth. From employee management to recruitment and onboarding, performance management and leave management, our HRMS platform makes it easier to keep your workforce productive and engaged.
  - group:
    - textbox "Your email address"
  - button "Start Your 30 Day Free Trial"
  - img "badges"
  - img "badges"
  - img "badges"
  - img "badges"
  - img "badges"
  - img "badges"
  - img "OHRM main slider img"
  - heading "Join Over 5 Million Users Who Trust OrangeHRM as Their Trusted HR Software Partner" [level=5]
  - img "ADRA Logo"
  - img "CFI logo"
  - img "Colten Care Logo"
  - img "Dnata logo"
  - img "DyStar"
  - img "Hawkeye Logo"
  - img "Helen Hayes Logo"
  - img "Puma Logo"
  - img "rewe fat east"
  - img "Toyota Logo"
  - img "Rutgers University Emblem"
  - img "Sandals"
  - img "Food for the Hungry"
  - img "stanley black"
  - img "Projects Abroad"
  - img "Chelton"
  - img "GALfoundation"
  - img "TCL"
  - img "toluna logo"
  - img "ADRA Logo"
  - img "CFI logo"
  - img "Colten Care Logo"
  - img "Dnata logo"
  - img "DyStar"
  - img "Hawkeye Logo"
  - img "Helen Hayes Logo"
  - img "Puma Logo"
  - img "rewe fat east"
  - img "Toyota Logo"
  - img "Rutgers University Emblem"
  - img "Sandals"
  - img "Food for the Hungry"
  - img "stanley black"
  - img "Projects Abroad"
  - img "Chelton"
  - img "GALfoundation"
  - img "TCL"
  - img "toluna logo"
  - img "ADRA Logo"
  - heading "Consolidate Your HR Processes into One Smart Platform" [level=2]
  - heading "People Management" [level=3]
  - paragraph: Managing the daily demands of HR, from resolving immediate challenges to overseeing extensive paperwork, can be significant. By implementing a strong people management strategy backed by HR software to automate your processes, you can equip your team with the necessary resources to thrive.
  - list:
    - link "HR Administration":
      - /url: /solutions/people-management/hr-administration
      - listitem: HR Administration
    - separator
    - link "Employee Management":
      - /url: /solutions/people-management/employee-management
      - listitem: Employee Management
    - separator
    - link "Reporting and Analytics":
      - /url: /solutions/people-management/reporting-and-analytics
      - listitem: Reporting and Analytics
    - separator
    - link "Mobile App":
      - /url: /solutions/people-management/orangehrm-mobile-app
      - listitem: Mobile App
  - button "HR Administration":
    - img "HR Administration"
  - heading "Talent Management" [level=3]
  - paragraph: A thriving company culture depends on a recruitment team that ensures every hire aligns with its values and vision. Beyond creating a positive candidate experience, they require a comprehensive HRMS that integrates a robust applicant tracking system and an automated, world-class onboarding experience to ensure your new employees are ready before they even step through the door.
  - list:
    - link "Recruitment":
      - /url: /solutions/talent-management/recruitment
      - listitem: Recruitment
    - separator
    - link "Onboarding":
      - /url: /solutions/talent-management/onboarding
      - listitem: Onboarding
    - separator
    - link "Request Desk":
      - /url: /solutions/talent-management/request-desk
      - listitem: Request Desk
  - button "Recruitment":
    - img "Recruitment"
  - heading "Compensation" [level=3]
  - paragraph: Eliminate the complexity of manually managing leave management, time and attendance tracking, and employee scheduling. With OrangeHRM's HRMS platform, you can automate these processes, reduce manual errors, and keep data flowing seamlessly across HR. This lets you focus on strategic HR initiatives and building a more productive workplace, instead of getting bogged down by administrative tasks.
  - list:
    - link "Leave Management":
      - /url: /solutions/compensation/leave-management
      - listitem: Leave Management
    - separator
    - link "Time and Attendance":
      - /url: /solutions/compensation/time-and-attendance
      - listitem: Time and Attendance
    - separator
    - link "Roster":
      - /url: /solutions/compensation/roster
      - listitem: Roster
  - button "Clock in Clock Out":
    - img "Clock in Clock Out"
  - heading "Culture" [level=3]
  - paragraph: Your commitment to developing your people fosters a thriving company culture where employees feel valued and more engaged. By leveraging HR software to actively manage performance, support career development, and provide effective training, you empower your team to grow, enabling you to recognize challenges and celebrate successes.
  - list:
    - link "Performance Management":
      - /url: /solutions/culture/performance-management
      - listitem: Performance Management
    - separator
    - link "Career Development":
      - /url: /solutions/culture/career-development
      - listitem: Career Development
    - separator
    - link "Training":
      - /url: /solutions/culture/training
      - listitem: Training
    - separator
    - link "Surveys":
      - /url: /solutions/culture/surveys
      - listitem: Surveys
    - separator
    - link "Employee Voice":
      - /url: /solutions/culture/employee-voice
      - listitem: Employee Voice
    - separator
    - link "Discipline":
      - /url: /solutions/culture/discipline
      - listitem: Discipline
  - button "Career Development":
    - img "Career Development"
  - heading "White Glove Implementation and Exceptional Support" [level=2]
  - img "hosting icon"
  - heading "Flexible hosting options to suit your needs!" [level=5]
  - link "Learn More":
    - /url: /why-orangehrm/on-premise-hosting
  - img "support icon"
  - heading "Ongoing support wherever you are located!" [level=5]
  - link "Learn More":
    - /url: /company/contact-us
  - heading "Connect OrangeHRM to Your Existing Tech Stack" [level=2]
  - paragraph: Let OrangeHRM serve as the hub of your HR technology ecosystem. Connect your existing tech stack to OrangeHRM to streamline processes, improve accuracy, and scale rapidly.
  - link "Explore Connectors":
    - /url: /solutions/connectors
  - heading "What Our Clients Say" [level=2]
  - img "Maria Glezos"
  - paragraph: OrangeHRM is a project we're taking very seriously as it's a very exciting and important change for us to move to this system. I can see that OrangeHRM takes their work in transitioning clients as seriously as we are taking in making the transition to your application. As mentioned, we'd considered ADP and a few other applications in an evaluation process and thanks to your good work and patience and in the apparent friendly user interface and customizeability of your system, the decision became very easy to make the change.
  - heading "Maria Glezos" [level=5]
  - text: Director of HR, Benefits & Administration
  - img "S. Callan"
  - paragraph: OrangeHRM has provided our small non-profit with the ability to seamlessly onboard, train and maintain employee information in our field, without using multiple spreadsheets. This customizable system is easy to learn and utilize, and the customer service team far surpasses others software systems currently used. OrangeHRM is highly recommended by Affinity.
  - heading "Stephanie Callan" [level=5]
  - text: Director of Administration
  - img "GuillermoCogorno"
  - paragraph: We chose OrangeHRM due to the flexibility they offer, especially within our industry. OrangeHRM offers a flexible solution, and people. They understood what challenges we faced, and offered a solution that could fit with our organization, and not the other way round, which many other suppliers do. OrangeHRM has made it easy for us to choose what modules we felt were needed at specific times. We are really excited to watch how we progress even more, and see what the future holds.
  - heading "Guillermo Cogorno" [level=5]
  - text: HR Director
  - img "Dawn Lambert"
  - paragraph: There has been a significant improvement in our ability to track important information regarding leave ever since we started using this system in 2022. I have found the system to be user friendly both as an Administrator and end user. It gives our team a sense of ownership in the management of their leave and personal details as they can track leave and update their personal details.
  - heading "Dawn Lambert" [level=5]
  - text: Human Resource and Training Manager
  - img "ORange"
  - paragraph: OrangeHRM has everything a HR department needs to function to its fullest potential in just one system. Representatives of OrangeHRM are willing to spend time, build things up and provide demonstrations before commitment, which were amazing and very informative. My experience with OrangeHRM is certainly positive and beneficial for my work!
  - heading "Andreas Tziarras" [level=5]
  - text: Managing Director
  - img "Elementa Logo"
  - paragraph: Implementing OrangeHRM has been a game-changer for our organization. As a remote company with a dynamic workforce, we needed a robust HR management system that could streamline our HR processes and improve overall efficiency. OrangeHRM has significantly enhanced our HR operations, allowing us to focus more on strategic initiatives and less on administrative tasks. Its comprehensive features, ease of use, and excellent support make it an indispensable tool for any organization looking to optimize its HR processes. We highly recommend OrangeHRM to any company seeking a reliable and scalable HR management solution.
  - heading "Earl Dela Torre" [level=5]
  - text: HR Manager
  - img "wtfast logo"
  - paragraph: OrangeHRM has significantly streamlined HR administration for our small software company. As the HR manager, I've found the Leave Absence feature particularly useful. Its user-friendly interface allows employees to easily submit leave requests, and the automatic system updates eliminate the need for manual paperwork and follow-ups.
  - heading "Hassaan Ahmad" [level=5]
  - text: CFO
  - img "sato"
  - paragraph: We needed a system able to capture this diversity, highly customizable and easy to use at the same time, a unique combination of complexity and simplicity. We were also looking for a solution that would give us flexibility to have a gradual, step-by-step implementation process, allowing us to move at our own pace. And we found all of that in OrangeHRM!
  - heading "Irina Rogozhina" [level=5]
  - text: European HR Generalist
  - img "Fabian Di Gregorio"
  - paragraph: Some years ago, we embarked on a detailed and comprehensive analysis of the Market to identify an HR Management system that would fully meet our Organizational requirements and allow us to prioritize and streamline our business processes. We recognized OrangeHRM as being the best solution for us. The key factors in our decision-making process were the functionality offered by the product, a user-friendly and intuitive interface, language translation and of course pricing.
  - heading "Fabian Di Gregorio" [level=5]
  - text: Finance/Human Resources Regional Manager
  - img "Maria Glezos"
  - paragraph: OrangeHRM is a project we're taking very seriously as it's a very exciting and important change for us to move to this system. I can see that OrangeHRM takes their work in transitioning clients as seriously as we are taking in making the transition to your application. As mentioned, we'd considered ADP and a few other applications in an evaluation process and thanks to your good work and patience and in the apparent friendly user interface and customizeability of your system, the decision became very easy to make the change.
  - heading "Maria Glezos" [level=5]
  - text: Director of HR, Benefits & Administration
  - img "S. Callan"
  - paragraph: OrangeHRM has provided our small non-profit with the ability to seamlessly onboard, train and maintain employee information in our field, without using multiple spreadsheets. This customizable system is easy to learn and utilize, and the customer service team far surpasses others software systems currently used. OrangeHRM is highly recommended by Affinity.
  - heading "Stephanie Callan" [level=5]
  - text: Director of Administration
  - img "GuillermoCogorno"
  - paragraph: We chose OrangeHRM due to the flexibility they offer, especially within our industry. OrangeHRM offers a flexible solution, and people. They understood what challenges we faced, and offered a solution that could fit with our organization, and not the other way round, which many other suppliers do. OrangeHRM has made it easy for us to choose what modules we felt were needed at specific times. We are really excited to watch how we progress even more, and see what the future holds.
  - heading "Guillermo Cogorno" [level=5]
  - text: HR Director
  - img "Dawn Lambert"
  - paragraph: There has been a significant improvement in our ability to track important information regarding leave ever since we started using this system in 2022. I have found the system to be user friendly both as an Administrator and end user. It gives our team a sense of ownership in the management of their leave and personal details as they can track leave and update their personal details.
  - heading "Dawn Lambert" [level=5]
  - text: Human Resource and Training Manager
  - img "ORange"
  - paragraph: OrangeHRM has everything a HR department needs to function to its fullest potential in just one system. Representatives of OrangeHRM are willing to spend time, build things up and provide demonstrations before commitment, which were amazing and very informative. My experience with OrangeHRM is certainly positive and beneficial for my work!
  - heading "Andreas Tziarras" [level=5]
  - text: Managing Director
  - img "Elementa Logo"
  - paragraph: Implementing OrangeHRM has been a game-changer for our organization. As a remote company with a dynamic workforce, we needed a robust HR management system that could streamline our HR processes and improve overall efficiency. OrangeHRM has significantly enhanced our HR operations, allowing us to focus more on strategic initiatives and less on administrative tasks. Its comprehensive features, ease of use, and excellent support make it an indispensable tool for any organization looking to optimize its HR processes. We highly recommend OrangeHRM to any company seeking a reliable and scalable HR management solution.
  - heading "Earl Dela Torre" [level=5]
  - text: HR Manager
  - img "wtfast logo"
  - paragraph: OrangeHRM has significantly streamlined HR administration for our small software company. As the HR manager, I've found the Leave Absence feature particularly useful. Its user-friendly interface allows employees to easily submit leave requests, and the automatic system updates eliminate the need for manual paperwork and follow-ups.
  - heading "Hassaan Ahmad" [level=5]
  - text: CFO
  - img "sato"
  - paragraph: We needed a system able to capture this diversity, highly customizable and easy to use at the same time, a unique combination of complexity and simplicity. We were also looking for a solution that would give us flexibility to have a gradual, step-by-step implementation process, allowing us to move at our own pace. And we found all of that in OrangeHRM!
  - heading "Irina Rogozhina" [level=5]
  - text: European HR Generalist
  - img "Fabian Di Gregorio"
  - paragraph: Some years ago, we embarked on a detailed and comprehensive analysis of the Market to identify an HR Management system that would fully meet our Organizational requirements and allow us to prioritize and streamline our business processes. We recognized OrangeHRM as being the best solution for us. The key factors in our decision-making process were the functionality offered by the product, a user-friendly and intuitive interface, language translation and of course pricing.
  - heading "Fabian Di Gregorio" [level=5]
  - text: Finance/Human Resources Regional Manager
  - img "Maria Glezos"
  - paragraph: OrangeHRM is a project we're taking very seriously as it's a very exciting and important change for us to move to this system. I can see that OrangeHRM takes their work in transitioning clients as seriously as we are taking in making the transition to your application. As mentioned, we'd considered ADP and a few other applications in an evaluation process and thanks to your good work and patience and in the apparent friendly user interface and customizeability of your system, the decision became very easy to make the change.
  - heading "Maria Glezos" [level=5]
  - text: Director of HR, Benefits & Administration
  - heading "Frequently Asked Questions" [level=2]
  - paragraph: Everything you need to know about OrangeHRM
  - heading "Does OrangeHRM offer a free version?" [level=2]:
    - button "Does OrangeHRM offer a free version?" [expanded]
  - text: Yes! The OrangeHRM Starter is our free, open-source version designed for small businesses looking to automate HR tasks like employee management, leave tracking, and reporting.
  - heading "Is there a free trial?" [level=2]:
    - button "Is there a free trial?"
  - heading "What is the difference between the OrangeHRM Starter and Advanced?" [level=2]:
    - button "What is the difference between the OrangeHRM Starter and Advanced?"
  - heading "Is OrangeHRM cloud-based or on-premise?" [level=2]:
    - button "Is OrangeHRM cloud-based or on-premise?"
  - heading "How is OrangeHRM priced?" [level=2]:
    - button "How is OrangeHRM priced?"
  - heading "What systems does OrangeHRM integrate with?" [level=2]:
    - button "What systems does OrangeHRM integrate with?"
  - heading "Can I upgrade from the free version to Advanced?" [level=2]:
    - button "Can I upgrade from the free version to Advanced?"
  - heading "How do I get started with OrangeHRM?" [level=2]:
    - button "How do I get started with OrangeHRM?"
  - heading "How long does it take to implement OrangeHRM?" [level=2]:
    - button "How long does it take to implement OrangeHRM?"
  - heading "How does OrangeHRM protect my employee data?" [level=2]:
    - button "How does OrangeHRM protect my employee data?"
  - heading "Is OrangeHRM GDPR compliant?" [level=2]:
    - button "Is OrangeHRM GDPR compliant?"
  - heading "Does OrangeHRM have a mobile app?" [level=2]:
    - button "Does OrangeHRM have a mobile app?"
  - heading "Does OrangeHRM support AI features?" [level=2]:
    - button "Does OrangeHRM support AI features?"
  - heading "Is OrangeHRM suitable for small businesses?" [level=2]:
    - button "Is OrangeHRM suitable for small businesses?"
  - heading "Can OrangeHRM be customized for my industry?" [level=2]:
    - button "Can OrangeHRM be customized for my industry?"
  - heading "Does OrangeHRM support multi-location or global teams?" [level=2]:
    - button "Does OrangeHRM support multi-location or global teams?"
  - heading "What kind of customer support does OrangeHRM provide?" [level=2]:
    - button "What kind of customer support does OrangeHRM provide?"
  - heading "How do I contact OrangeHRM support for technical or general inquiries?" [level=2]:
    - button "How do I contact OrangeHRM support for technical or general inquiries?"
  - img "Team Member"
  - img "Team Member"
  - img "Team Member"
  - heading "Still have questions?" [level=4]:
    - strong: Still have questions?
  - paragraph: Can’t find the answer you’re looking for? Talk to one of our product experts today!
  - button "Contact Sales":
    - link "Contact Sales":
      - /url: /contact-sales
- contentinfo:
  - link "OrangeHRM Logo":
    - /url: /
    - img "OrangeHRM Logo"
  - img "users-love-us"
  - img "CoreHR_HighPerformer_HighPerformer"
  - img "sourceforge-user-reviews"
  - link "OrangeHRM Advanced Reviews":
    - /url: https://sourceforge.net/software/product/OrangeHRM/?pk_campaign=badge&pk_source=vendor
    - img "OrangeHRM Advanced Reviews"
  - img "CoreHR_HighPerformer_HighPerformer"
  - img "users-love-us"
  - heading "Company" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://orangehrm.com/company/about-us
    - listitem:
      - link "Become a Partner":
        - /url: https://orangehrm.com/why-orangehrm/partners/partner-programs
    - listitem:
      - link "Contact Us":
        - /url: https://orangehrm.com/company/contact
    - listitem:
      - link "Press Releases":
        - /url: https://orangehrm.com/company/press-releases
    - listitem:
      - link "News Articles":
        - /url: https://orangehrm.com/company/news-articles
    - listitem:
      - link "Careers":
        - /url: https://orangehrm.com/company/careers
    - listitem:
      - link "Contact Sales":
        - /url: https://orangehrm.com/contact-sales
    - listitem:
      - link "Our Offices":
        - /url: https://orangehrm.com/company/about-us
    - listitem:
      - link "Help Portal":
        - /url: https://help.orangehrm.com
    - listitem:
      - link "AI Help Desk":
        - /url: https://aihelpdesk.orangehrm.com/
    - listitem:
      - link "CS & Support":
        - /url: https://help.orangehrm.com/hc/en-us/articles/54232712645913
  - heading "Resources" [level=5]
  - list:
    - listitem:
      - link "E-Books":
        - /url: https://orangehrm.com/resources/e-books
    - listitem:
      - link "Blog":
        - /url: https://orangehrm.com/resources/blog
    - listitem:
      - link "HR Dictionary":
        - /url: https://orangehrm.com/resources/hr-dictionary
    - listitem:
      - link "Advanced Overview":
        - /url: https://orangehrm.com/assets/Documents/pdf/Product-Overview.pdf
    - listitem:
      - link "Data Security Promise":
        - /url: https://orangehrm.com/resources/other-resources/data-security-promise
    - listitem:
      - link "OrangeHRM AI Principles":
        - /url: https://orangehrm.com/ai-principles
    - listitem:
      - link "Product Updates":
        - /url: https://orangehrm.com/product-updates
  - heading "Policies" [level=5]
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: https://orangehrm.com/policies/orangehrm-privacy-policy
    - listitem:
      - link "Service Privacy Policy":
        - /url: https://orangehrm.com/policies/orangehrm-service-privacy-policy
    - listitem:
      - link "General Public License":
        - /url: https://orangehrm.com/policies/gnu-general-public-license
    - listitem:
      - link "Commercial License":
        - /url: https://orangehrm.com/assets/Uploads/OrangeHRM-Commercial-License.pdf
    - listitem:
      - link "DPF Privacy Policy":
        - /url: https://orangehrm.com/assets/Documents/DPF-Privacy-Policy.pdf
    - listitem:
      - link "Modern Day Slavery Statement":
        - /url: https://orangehrm.com/assets/Documents/policies/orangehrm-modern-slavery-statement.pdf?_gl=1*sh1nzz*_gcl_au*MjkzNzAzODc0LjE3NDY1MDk2NDIuMTM0NTAzNDkwMi4xNzUwMjI4ODE5LjE3NTAyMjg4NDM.
    - listitem:
      - link "Cookie Declaration":
        - /url: https://orangehrm.com/policies/cookie-declaration
  - heading "Alternatives" [level=5]
  - list:
    - listitem:
      - link "Freshteam Alternative":
        - /url: https://orangehrm.com/freshteam-alternative
  - paragraph: OrangeHRM Inc. © 2026 All Rights Reserved.
  - list:
    - listitem:
      - link "facebook":
        - /url: https://www.facebook.com/OrangeHRM
        - img "facebook"
    - listitem:
      - link "linkedin":
        - /url: https://www.linkedin.com/company/orangehrm/mycompany/
        - img "linkedin"
    - listitem:
      - link "youtube":
        - /url: https://x.com/orangehrm
        - img "youtube"
    - listitem:
      - link "linkedin":
        - /url: https://www.youtube.com/user/orangehrm
        - img "linkedin"
    - listitem:
      - link "linkedin":
        - /url: https://www.instagram.com/orangehrm_inc
        - img "linkedin"
  - link "Site Map":
    - /url: /site-map
```

# Test source

```ts
  1  | import{test,expect, chromium} from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('NewOrange login', async ({ page }) => {
  6  | 
  7  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
  8  | 
  9  |     //Login Page
  10 |     const Logo = await page.getByAltText('company-branding')
  11 |     expect(Logo).toBeVisible({ timeout: 5000 });
  12 | 
  13 |     await page.getByPlaceholder('Username').fill('Admin');
  14 |     await page.getByPlaceholder('Password').fill('admin123');
  15 | 
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 | 
  18 | })
  19 | 
  20 | test('Window Handling', async()=>{
  21 |     
  22 |     const browser = await chromium.launch();
  23 |     const context = await browser.newContext();
  24 |     const page1 = await context.newPage();
  25 | 
  26 |     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  27 |     await expect(page1).toHaveTitle('OrangeHRM');
  28 | 
  29 |     const page2 = context.waitForEvent('page');
  30 |     await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
  31 |     
  32 | 
  33 |     const newPage = await page2;
  34 |     await newPage.waitForLoadState();
> 35 |     await expect(newPage).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM');
     |                           ^ Error: expect(page).toHaveTitle(expected) failed
  36 |     await newPage.close();
  37 |     await page1.bringToFront();
  38 |     await expect(page1).toHaveTitle('OrangeHRM');
  39 | 
  40 | 
  41 | })
```