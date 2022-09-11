import React from 'react';
import './Faq.css';
import { Link } from 'react-router-dom'
function Faq() {
    return <div>
        <div id="back-to-feed" >
            <Link to="/feed" >
                <img className="icon" src="https://www.kooapp.com/assets/2d634360.svg" alt="3" />
            </Link>

            <Link to="/feed" >
                <button className="btn"> 🢀 Back To Feed</button>
            </Link>
        </div>
        <div className="about-us" >Frequently Asked Questions</div>

        <div className="questions1">
            <div className="head-box">
                <div>Account Settings</div>
                <div>Queries</div>
                <div>Troubleshooting</div>
                <div>Reported Koos and Accounts</div>
                <div>Legal</div>
                <div>New User FAQ</div>
                <div>Following</div>
                <div>Different Tabs on Koo</div>
                <div>Contact Us</div>

            </div>
            <div className="scrolling-box">
                <div style={{ color: "black" }} >HAVE MORE QUESTIONS? CHAT WITH US ON WHATSAPP: +91-6301452077</div>
                <div className="h1">ACCOUNT SETTINGS</div>
                <div className="h2">Q. Edit Proﬁle Picture</div>
                <p>You can edit your profile picture by going to ⚙ 🡢 Edit Profile 🡢 . You can either take a photo or upload from your gallery. In addition to this you can add frames by going to app settings 🡢 Edit Profile 🡢⊕, you can select from #Vaccinated, #Plasmadonor or #Readytodonate.</p>
                <div className="h2">Q. Set your Gender and Marital status to Private or Public</div>
                <p>You have full control over the information that you disclose about yourself. After filling the details a Koo user can choose to disclose the gender and marital status to other Koo users by setting it to “On” or “Off”. You can find the settings in App settings 🡢 Edit Profile 🡢 Gender/ Marital Status. Please choose a Privacy Setting most appropriate to you. Make sure you read the Koo Privacy Policy at kooapp.com/privacy.</p>
                <div className="h2" >Q. Adding a second Account</div>
                <p>On Koo you can add a second account to your app. You can do so by going to ⚙ 🡢 and input your number/email to get an OTP for your second account.</p>
                <div className="h2">Q. Language preferences</div>
                <p>Koo is one of the very few apps that allows you to express your opinions in your mother tongue. So far we support 8 languages in India and 1 5 of Nigeria with more coming soon. We are already testing for other languages and will soon make them available once the issues are resolved. You can change your language by going to ⚙ 🡢 🌐 Languages</p>
                <div className="h2">Q. Account Deletion</div>
                <p>We are sorry that you want to leave Koo. You can delete your Account by going to ⚙ 🡢 Delete. Once requested the account goes in suspension for the next 30 days. This period is given so that if the user wants to use Koo again he can do so. During the suspension if the user logs in the request to delete gets cancelled. After 30 days the account along with all the details are erased from our servers.</p>
                <div className="h1">QUERIES</div>
                <div className="h2">Q. Why am I not getting notiﬁcation for DMs?</div>
                <p>This issue may occur with certain devices. Please reach out to redressal@kooapp.com for more information.</p>
                <div className="h2">Q. My feed is not updating. What should I do?</div>
                <p>Feed might not be updating because of the following reasons:</p>
                <p>(a) Feed will take a little time to load if you've logged in after many days, as in, a minimum of 3-4 days. Please refresh once and wait for sometime and it will be good to go.</p>
                <p>(b) Feed is also dependent on the activity of the proﬁles one follows. In case you are following less proﬁles we request you to follow more interesting proﬁles. Also, if you follow someone who doesn't post regularly then also your feed will not be updated. We would request you to follow who posts actively on Koo.</p>
                <p>If the issue persists for more than a day, this is not the expected behavior. Kindly drop us an email at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it.</p>
                <div className="h2">Q. How can I download images from Koo?</div>
                <p>You can download images by clicking on the particular image and ⤓.</p>
                <div className="h2">Q. How can I download videos from Koo?</div>
                <p>At the moment we do not have this feature. Please be assured that we are working on making this ava</p>
                <div className="h2">Q. My scrolling is not smooth. Can you help?</div>
                <p>This issue may occur with certain devices. Please reach out to aakashnaykude123@gmail.com for more information. We are also constantly working to improve user experience</p>
                <div className="h2">Q. Why is the app slow?</div>
                <p>In our recent update we have released a faster and better UI. . Please check your internet speed, clear your cache files or restart the phone. If the problem still persists, kindly drop us an email at aakashnaykude123@gmail.com along with your handle and screen recording or screenshot .</p>
                <div className="h2">Q. My Followers are not increasing, what should I do?</div>
                <p>An increase/decrease in followers is a reflection of your activity on the platform and the community’s interest. This is a very democratic process and we do not have any direct role to play.

                    For an engaging experience at Koo we request you to post a minimum of two Koos everyday.

                    Kindly drop us a mail at redressal@kooapp.com along with your handle and screen recording or screenshot, for us to check for any technical issue.</p>
                <div className="h2">Q. I have applied for Eminence but there has been no response?</div>
                <p>Koo's Eminence criteria is transparently listed here. For any Eminence related queries kindly drop us an email at eminence.verification@kooapp.com along with your handle. Alternatively, For applying for verification you can go to ⚙ 🡢 'apply for verified badge option'.</p>
                <div className="h2">Q. Why are my Koos not shown in trending hashtags?</div>
                <p>Trending Koos are the ones that the community loves and engages with. Koos in trending hashtags are shown on reaction basis and not on ‘how recent a Koo’ is. We will be releasing a filter in the feed where you can change your mode from “Most Engaging” post to 'Latest' post. For a better user experience we recommend you to post a minimum of 2 Koos daily.</p>
                <div className="h2">Q. I see a lot of abusive/hateful language. What can I do?</div>
                <p>Abusive and hateful language is something we do not encourage on Koo and require all content to comply with our Community Guidelines. Please use our in app reporting feature to report such Koo. A review will be made based on legal guidelines and community reporting. To report a Koo, please use the two dots on the top right corner of a Koo and from the index choose Report Koo. A Koo can be reported for any of the reasons listed in the index.</p>
                <div className="h2">Q. Someone is impersonating me, what can I do?</div>
                <p>If someone is impersonating you then please report such a profile. To report, please use the two dots on the top right corner of a Koo and from the index choose Report User. A User can be reported for any of the reasons listed in the index including “pretending to be me or someone else”.</p>
                <div className="h2">Q. When is the Dark Mode coming?</div>
                <p>Dark mode is available from version 0.92.0 or higher. We request you to update your app to the latest version. You can choose between the light and dark themes as your preference. The settings can be found in ⚙ 🡢 Themes.</p>
                <div className="h2">Q. I don’t ﬁnd the latest version after I receive a notiﬁcation of an update. Why?</div>
                <p>Updates are applied in a phased manner to ensure minimal impact of bugs. Please have patience and the new features will be visible soon</p>
                <div className="h2">Q. Why can’t I change my Number or email address?</div>
                <p>We don’t allow changes in contact details as a security measure. In case you are facing any issue while adding your contact details for the ﬁrst time feel free to reach us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it.</p>
                <div className="h2">Q. Why am I not able to change professional details?</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of the issue and and you will soon be able to change details in the coming updates.</p>
                <div className="h2">Q. Why are Koos in my feed repeating?</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue is related to phone build and not all users face this. We will soon resolve this issue and make it available to our users in the coming updates.</p>
                <div className="h2">Q. Why is my app getting logged out again and again?</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue is resolved in our recent updates. We request you to uninstall and then reinstall the app. If the issue still persists, please reach out to us at redressal@kooapp.com with your handle and phone number</p>
                <div className="h2">Q. Notiﬁcations don't lead to the actual content?</div>
                <p>We sincerely regret any inconvenience due to this reason. Tapping on a notification will take you to the Koo feed which contains many Koos. The photo in the notification need not be necessarily be from from a Koo which is first. You will be able to find the relevant Koo by scrolling down.</p>
                <div className="h2">Q. The Search bar is not working properly!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this issue. and have improved it compared to the previous versions. We request you to check your internet connection and then use it. If it does not work then reach out to us at redressal@kooapp.com.</p>
                <div className="h2">Q. Unable to remove my proﬁle picture!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this request. release it in the coming updates. Please bear with us for some time</p>
                <div className="h2">Q. I have deleted the chat but still it is there, why?</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this issue and We will soon resolve this issue and make it available in the coming updates.</p>
                <div className="h2">Q. New guest account was created, please remove them!</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue can be resolved with an easy reinstall using the phone number which you used for the first time when you created your original account. These newly created accounts will disappear.</p>
                <div className="h2">Q. Long videos don't run, the screen goes off, please help!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this request. We are aware of the issue and will soon release it in the upcoming updates. We request you to bear with us for some time.</p>
                <div className="h2">Q. Accounts deleted are still visible by others even after 30 days!</div>
                <p>sincerely regret any inconvenience due to this reason. This issue is generally not seen. We request you to reach out to us at redressal@kooapp.com with your handle and phone number linked to it.</p>
                <div className="h2">Q. Having Typing issues in Hindi</div>
                <p>We sincerely regret any inconvenience due to this reason. Our team is already working on resolving it.</p>
                <div className="h1">TROUBLESHOOTING</div>
                <p>There is a constant traﬃc we receive and there might be a delay from our end due to this. We request you do the following, while awaiting our response.</p>
                <div className="h2">Q. Not getting any Notiﬁcations</div>
                <p>A common reason for not receiving notifications is that they may be turned off in the settings. We request you to go to app settings 🡢 Notifications and set your preferences. If all the notifications are turned on and you are not receiving notifications we request you to go to phone settings 🡢 Notifications 🡢 Manage Notifications 🡢 Koo and set it to on. If the issue persists, kindly mail us at redressal@kooapp.comalong with your handle and screen recording or screenshot, we will fix it., and we’ll ensure a quick resolution.</p>
                <div className="h2">Q. Receiving too many notiﬁcations</div>
                <p>We request you to go to app settings 🡢 Notifications 🡢 and set all your notifications off. If you want to totally stop receiving notifications, we request you to your phone settings 🡢 notifications 🡢 Koo and turn off notifications. If the issue persists, kindly mail us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will fix it., and we’ll ensure a quick resolution redressal@kooapp.com.</p>
                <div className="h2">Q. Not getting OTP</div>
                <p>If any situation arises where you do not receive an OTP we request you to reinstall the app. Also check your mobile network. In most cases, this has resolved the issue. If the issue persists, kindly mail us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it., and we'll ensure a quick resolution.</p>
                <div className="h2">Q. App is not opening</div>
                <p>We regret the inconvenience caused. We request you to reinstall/ update the app. Also check your internet connection. If the issue persists feel free to drop us a mail along with the screenshot at redressal@kooapp.com as it helps our team understand the issue better.</p>
                <div className="h2">Q. My app hangs while creating a Koo.</div>
                <p>This is not the expected behaviour of the app. We request you to reinstall/ update the app. If the issue persists feel free to drop us a mail along with the screenshot at redressal@kooapp.com as it helps our team understand the issue better.</p>
                <div className="h1">REPORTED KOOS AND ACCOUNTS</div>
                <div className="h2">Q. How can I report a Koo?</div>
                <p>You may report a Koo by going to a particular Koo 🡢 : 🡢 Report Koo. Reported Koos are managed in accordance with legal requirements. If you would like to report a Koo for violation of the Information Technology Act, 2000 or its Rules or copyright violations, please see our Compliance page for further information</p>
                <div className="h2">Q.How do I report a proﬁle?</div>
                <p>You can report a particular profile Koo by going to a particular Koo🡢 : 🡢 Report user.</p>
                <div className="h2">Q. I reported a Koo. Why has no action been taken on it?</div>
                <p>Koo is an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services.</p>
                <br /><br />
                <p>Koo does not undertake any obligation to monitor user generated content, except where specifically mandated under applicable law. If a Koo violates Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 action may be taken. You can read more about the same on our Compliance page and the Community Guidelines page.</p>
                <div className="h2">Q. I have received notification that my Koo has been reported. What happens next?</div>
                <p>Koo is an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services. Koo does not monitor user generated content, except where specifically mandated under applicable law.</p>
                <br />
                <p>You have received an auto generated Reported Koo notification because another user has reported your Koo.</p>
                <br />
                <p>If a Koo violates Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 action may be taken. You can read more about the same on our Compliance page and the Community Guidelines page.</p>
                <div className="h1">LEGAL</div>
                <div className="h2">Where can I ﬁnd information about Compliance and guidelines?</div>
                <p>Koo complies with the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.</p>
                <br />
                <p>Please read Koo’s Terms of Service, Compliance and Community Guidelines pages for more information. Please write to any of the below for any compliance related questions</p>
                <br />
                <p>Koo Compliance Officer: compliance.officer@kooapp.com Koo Grievance Officer: grievance.officer@kooapp.com</p>
                <div className="h2">Q. Why is my Koo removed?</div>
                <p>Koo is an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services. Koo does not monitor user generated content, except where specifically mandated under applicable law. If a Koo has been deleted it is likely to have violated applicable laws and Terms of Service, Compliance and Community Guidelines</p>
                <div className="h2">Q. Someone is posting nude and/or objectionable content. How can I report it?</div>
                <p>You can report using the "Report Koo" or "Report User" option within the Koo App. To report a Koo, please use the two dots on the top right corner of a Koo and from the index choose Report Koo. A Koo can be reported for any of the reasons listed in the index including Graphic, Obscene or Sexual Content.</p>
                <br /><br />
                <p>Grievances relating to violation of Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, including grievances by or on behalf an individual or child, relating to exposure of their private areas, full or partial nudity or depicting such individual or child in any sexual act or conduct, must be addressed to the Resident Grievance Officer at grievance.officer@kooapp.com or emailed to redressal@kooapp.com You can read more about the same on our Compliance page.</p>
                <div className="h2">Q. How can I report content related to child abuse.</div>
                <p>You can report using the "Report Koo" or "Report User" option within the Koo App. To report a Koo, please use the two dots on the top right corner of a Koo and from the index choose Report Koo. A Koo can be reported for any of the reasons listed in the index including Sexual Exploitation of a Child.</p>
                <br />
                <p>Grievances relating to violation of Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, including grievances by or on behalf an individual or child, relating to exposure of their private areas, full or partial nudity or depicting such individual or child in any sexual act or conduct, must be addressed to the Resident Grievance Officer at grievance.officer@kooapp.com or emailed to redressal@kooapp.com You can read more about the same on our Compliance page.</p>
                <div className="h2">Q. My Koo has been deleted. How can I get it reinstated?</div>
                <p>In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Koo provides User(s) with an adequate and reasonable opportunity to dispute an action taken on the content of a user. Such User(s) may request for reinstatement of access to such content. These requests will be decided within a reasonable time in accordance with law. You can read more about the same on our Compliance page.</p>
                <div className="h2">Q. I want to report a copyright violation?</div>
                <p>Koo does not undertake any obligation to monitor user generated content, except to the extent required by law. Koo is only an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services. While Koo supports valid and legitimate claims of intellectual property ownership, it cannot and does not adjudicate any claims. In the first instance, parties must resolve any disputes relating to intellectual property amongst themselves or through legal process, before reporting to Koo. Please read more and use the reporting form on our Compliancepage.</p>
                <div className="h1">ARE YOU A NEW USER? CHECK OUT NEW USER FAQ</div>
                <div className="h1">NEW USER FAQ</div>
                <div className="h2">Q. What is Koo app?</div>
                <p>Koo App is a microblogging platform where individuals can voice their opinions in regional Indian languages as well as English. Users post Koos, which could be a simple text, or a photo or a video or a combination. These Koos are visible to your followers or anyone who searches for your profile. If the community reacts to the contents of your Koo, they show up in the trending section.</p>
                <div className="h2">Q. Which different devices can be compatible with Koo?</div>
                <p>An internet connection and a mobile device or a computer are sufficient to use the Koo App. The Koo App can be downloaded from PlayStore and App Store. If you are someone who loves to use Koo on your computer, you can go here.</p>
                <div className="h2">Q. What's a Koo post?</div>
                <p>A koo is an opinion expressed by you in any form, such as text, photo, video or a combination of any of these. To post a Koo simply click on the + and you are ready to express yourself. We have additional surprise for you, while inserting any text, simply click on the + and select multiple languages and now you are multilinguist. Make sure your posts reflect who you truly are and do not post anything that may embarrass you or others.</p>
                <div className="h2">Q. Loved a Koo and want to share it?</div>
                <p>Came across something interesting and want to share it with your circle, then simply click on Re-Koo and now your circle can see the content. You can even Re-Koo and add up your thoughts by pressing the Re-Koo with the Comment.</p>
                <div className="h2">Q. Love to express yourself in pictures?</div>
                <p>You can upload pictures directly to your gallery by selecting the picture 🡢 share 🡢 Koo 🡢 post. Alternatively, you can do it through the app by clicking on + 🡢 🡢 select the picture 🡢 post. Please ensure that you are not posting any content that is illegal or violates the privacy of others.</p>
                <div className="h2">Q. Can I dictate my opinion?</div>
                <p>Sure whatever suits you best. You can also dictate your opinion on Koo by clicking on + 🡢 🗣 and voila you are now having a hands free experience. Here is a small trivia. Did you know Koo is the ﬁrst social media platform to release this feature in the whole world?</p>
                <div className="h2">Q. Can I edit a Koo?</div>
                <p>Yes you can edit a Koo if there has been no interaction from the community. If the Koo has been viewed or has any user engagement and you would still like to edit, it is best to delete the Koo and post a new one.</p>
                <div className="h2">Q. Can I customise the colour of the UI?</div>
                <p>There are currently three view customisations currently available namely Dark, Light and System. Dark is where the background of the app is darker and is comfortable for the eyes in low light situations. Light view is a brighter background of the app. System is based on the system settings if dark mode gets enabled on your phone then the same happens on the app. You can change the settings by clicking Proﬁle Picture 🡢 ⚙ 🡢 Theme.</p>
                <div className="h2">Q. What can I post on Koo?</div>
                <p>You can post anything of your liking as a Koo either as text or video or audio or a combination of these.</p>
                <br />
                <p>Please read and understand the Koo Community Guidelines and Compliance requirements before posting any content. Do not post anything that violates the rights of others or is illegal or otherwise objectionable. Koos violating legal requirements or Community Guidelines will be managed as per law and the process set out at kooapp.com/compliance.</p>
                <div className="h1">FOLLOWING</div>
                <p>Love someone's opinion and want to get more updates? You can follow that person and you will get all their posts. You can follow anyone by going to the profile and clicking the 'follow' button. You can unfollow by going to profile 🡢 following 🡢 yes.</p>
                <div className="h2">Q. Where can I follow?</div>
                <p>You can search for handles, import from contacts or by going to the people tab.</p>
                <div className="h2">Q. Who is following me?</div>
                <p>You can find your followers by going to your profile 🡢 followers. The followers can only view your Koos and do not have access to DM etc., unless you allow them to. If your Gender and Marital status are turned off to the public, they will not be visible to your followers. You can even block certain followers. Please choose the privacy settings that are most appropriate for you. You can choose to block anyone or make your profile fully public as per your wishes.</p>
                <div className="h2">Q. Who am I following ?</div>
                <p>You can find the profiles you follow by going to your Profile 🡢 Followers.</p>
                <div className="h2">Q. Can I block a follower?</div>
                <p>In case you don't want a particular follower to get your updates you can do by going to your proﬁle 🡢 followers 🡢 Particular proﬁle 🡢 🚫</p>
                <div className="h1">DIFFERENT TABS ON KOO</div>
                <div className="h2">Q. Feed</div>
                <p>This consists of the posts of the people you follow. We suggest you to follow more profiles if your feed looks quite empty.</p>
                <div className="h2">Q. People</div>
                <p>This tab consists of profiles categorized by various professions and categories. Want to get interesting updates you can go to Interesting accounts. Want to know profiles that the community finds engaging? Go on to the popular section.</p>
                <div className="h2">Q. Trending</div>
                <p>This tab is a collection of all the highest engaging profiles and Koo that the community absolutely loves. These are koos that are regular and are relevant to the community.</p>
                <div className="h2">Q. Videos</div>
                <p>You can find interesting videos or stay relevant to present day to day's events through this tab.</p>
                <div className="h2">Q. Polls</div>
                <p>Get interesting insights from individual polls or organisations polls. We found this tab to be a treasure trove of insights.</p>
                <div className="h2">Q. New</div>
                <p>Entering a new platform can seem daunting at first. But we have seen many friendships begin from among new joiners encouraging each other to a very positive experience made by existing users.</p>
                <br />
                <p>In addition to these tabs we have a tab based on current affairs like Olympics, TNPL, Sports etc.</p>
                <div className="h1">CONTACT US</div>
                <div className="h2">Q. How can I get in touch with Koo?</div>
                <p>Have a General Enquiry? Reach us on:  <a href="mailto:aakashnaykude123@gmail.com" className="mail">  aakashnaykude123@gmail.com  </a></p>
                <p>Want to work with us? Reach Us on :   <a href="mailto:vani630145@gmail.com" className="mail"> vani630145@gmail.com </a> </p>
                <p>Any Complaints? Reach Us on :  <a href="mailto:arnavi.gode96@gmail.com" className="mail" >arnavi.gode96@gmail.com</a></p>
                <p>Any Technical Complaints?Reach Us on :  <a href="mailto:emailgeorgeabraham@gmail.com" className="mail" >emailgeorgeabraham@gmail.com</a></p>
                <p>Have a Security Queries?Reach Us on :  <a href="mailto:ecmayankprajapati111@gmail.com" className="mail" >ecmayankprajapati111@gmail.com</a></p>







            </div>
        </div>
        <div className="all-queries" >
            <Link to="/about"><span> About </span></Link>  <Link to="/contact"><span>Contact Us</span></Link>
        </div>
        <div className="copy">Copyright Koo 2022 ©</div>
    </div>
}

export default Faq