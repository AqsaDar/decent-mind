import React, { useEffect } from "react";
import "./DataPolicy.scss";
import purple_vertical from "../../assets/images/purple-vertical-top-left.png";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
const DataPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="data-policy ">
        <div className="container py-4">
          <p className="headline my-4">
            Privacy Policy&nbsp;&nbsp;
            <img
              className="mt-4 vertical-4k"
              src={purple_vertical}
              height={40}
              width={50}
            />
          </p>
          <p>
            Personal data (usually referred to just as “data” below) will only
            be processed by us to the extent necessary and for the purpose of
            providing a functional and user-friendly website, including its
            contents, and the services offered there.
          </p>
          <br />
          <p>
            According to Art. 4 No. 1 of Regulation (EU) 2016/679, ie the
            General Data Protection Regulation (hereinafter referred to as the
            “GDPR”), “processing” refers to any operation or set of operations
            such as collection, recording, organization, structuring, storage,
            adaptation, alteration, retrieval, consultation, use, disclosure by
            transmission, dissemination, or otherwise making available,
            alignment, or combination, restriction, erasure, or destruction
            performed on personal data, whether by automated means or not.
          </p>
          <br />
          <p>
            The following privacy policy is intended to inform you in particular
            about the type, scope, purpose, duration, and legal basis for the
            processing of such data either under our own control or in
            conjunction with others. We also inform you below about the
            third-party components we use to optimize our website and improve
            the user experience which may result in said third parties also
            processing data they collect and control.
          </p>
          <br />
          <p>I. Information about us as controllers of your data</p>
          <p>
            II. The rights of users and data subjectsIII. Information about the
            data processing
          </p>
          <p>III. Information about the data processing</p>
          <br />
          <p className="heading">
            I. INFORMATION ABOUT US AS CONTROLLERS OF YOUR DATA
          </p>
          <p>
            The party responsible for this website (the “controller”) for
            purposes of data protection law is:
          </p>
          <br />
          <p>Frenetic Sports GmbHLudwig-Erhard-Allee 20</p>
          <p>76131 Karlsruhe</p>
          <p>+49 721 6190 9797</p>
          <p>www.frenetic-sports.comwelcome@frenetic-sports.com</p>
          <br />
          <p className="heading">II. THE RIGHTS OF USERS AND DATA SUBJECTS</p>
          <p>
            With regard to the data processing to be described in more detail
            below, users and data subjects have the right. to confirmation of
            whether data concerning them is being processed, information about
            the data being processed, further information about the nature of
            the data processing, and copies of the data (cf. also Art. 15 GDPR);
            to correct or complete incorrect or incomplete data (cf. also Art.
            16 GDPR); to the immediate deletion of data concerning them (cf.
            also Art. 17 GDPR), or, alternatively, if further processing is
            necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said
            processing per Art. 18 GDPR; to receive copies of the data
            concerning them and / or provided by them and to have the same
            transmitted to other providers / controllers (cf. also Art. 20
            GDPR); to file complaints with the supervisory authority if they
            believe that data concerning them is being processed by the
            controller in breach of data protection provisions (see also Art. 77
            GDPR).
          </p>
          <br />
          <p>
            In addition, the controller is obliged to inform all recipients to
            whom it data of any such corrections, deletions, or restrictions
            placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR.
            However, this obligation does not apply if such notification is
            impossible or involves a disproportionate effort. Nevertheless,
            users have a right to information about these recipients.
          </p>
          <p>
            Likewise, under Art. 21 GDPR, users and data subjects have the right
            to object to the controller’s future processing of their data
            pursuant to Art. 6 Para. 1 letter f) GDPR. In particular, an
            objection to data processing for the purpose of direct advertising
            is permissible.
          </p>
          <br />
          <p className="heading">III. Information about the data processing</p>
          <p>
            Your data processed when using our website will be deleted or
            blocked as soon as the purpose for its storage ceases to apply,
            provided the deletion of the same is not in breach of any statutory
            storage obligations or unless otherwise stipulated below.
          </p>
          <br />
          <p className="heading">SERVER DATA</p>
          <p>
            For technical reasons, the following data sent by your internet
            browser to us or to our server provider will be collected,
            especially to ensure a secure and stable website: These server log
            files record the type and version of your browser, operating system,
            the website from which you came (referrer URL), the webpages on our
            site visited, the date and time of your visit, as well as the IP
            address from which you visited our site. The data thus collected
            will be temporarily stored, but not in association with any other of
            your data.
          </p>
          <p>
            The basis for this storage is Art. 6 Para. 1 letter f) GDPR. Our
            legitimate interest lies in the improvement, stability,
            functionality, and security of our website.
          </p>
          <p>
            The data will be deleted within no more than seven days, unless
            continued storage is required for evidentiary purposes. In which
            case, all or part of the data will be excluded from deletion until
            the investigation of the relevant incident is finally resolved.
          </p>
          <br />
          {/* cookies  */}
          <p className="heading">COOKIES</p>
          <br />
          <p className="heading">a) Session cookies</p>
          <p>
            We use cookies on our website. Cookies are small text files or other
            storage technologies stored on your computer by your browser. These
            cookies process certain specific information about you, such as your
            browser, location data, or IP address. <br />
            This processing makes our website more user-friendly, efficient, and
            secure, allowing us, for example, to display our website in
            different languages or to offer a shopping cart function. The legal
            basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as
            these cookies are used to collect data to initiate or process
            contractual relationships. <br />
            If the processing does not serve to initiate or process a contract,
            our legitimate interest lies in improving the functionality of our
            website. The legal basis is then Art. 6 Para. 1 letter f) GDPR. When
            you close your browser, these session cookies are deleted.
          </p>
          <br />
          <p className="heading">b) Third-party cookies</p>
          <p>
            If necessary, our website may also use cookies from companies with
            whom we cooperate for the purpose of advertising, analyzing, or
            improving the features of our website. <br />
            Please refer to the following information for details, in particular
            for the legal basis and purpose of such third-party collection and
            processing of data collected through cookies Please refer to the
            following information for details, in particular for the legal basis
            and purpose of such third -party collection and processing of data
            collected through cookies.
          </p>
          <br />
          <p className="heading">c) Disabling cookies</p>
          <p>
            You can refuse the use of cookies by changing the settings on your
            browser. Likewise, you can use the browser to delete cookies that
            have already been stored. However, the steps and measures required
            vary, depending on the browser you use. If you have any questions,
            please use the help function or consult the documentation for your
            browser or contact its maker for support. Browser settings cannot
            prevent so-called flash cookies from being set. Instead, you will
            need to change the setting of your Flash player. The steps and
            measures required for this also depend on the Flash player you are
            using. If you have any questions, please use the help function or
            consult the documentation for your Flash player or contact its maker
            for support.
          </p>
          <br />
          <p>
            If you prevent or restrict the installation of cookies, not all of
            the functions on our site may be fully usable.
          </p>
          <br />
          {/* end-cookies */}
          {/* contact */}
          <p className="heading">CONTACT</p>
          <p>
            If you contact us via email or the contact form, the data you
            provide will be used for the purpose of processing your request. We
            must have this data in order to process and answer your inquiry;
            otherwise we will not be able to answer it in full or at all.
          </p>
          <br />
          <p>
            The legal basis for this data processing is Art. 6 Para. 1 lit. b)
            GDPR.
          </p>
          <br />
          <p>
            Your data will be deleted once we have fully answered your inquiry
            and there is no further legal obligation to store your data, such as
            if an order or contract resulted from there.
          </p>
          <br />
          {/* end-contact */}
          {/* google-analytics */}
          <p className="heading">GOOGLE ANALYTICS</p>
          <p>
            We use Google Analytics on our website. This is a web analytics
            service provided by Google Inc., 1600 Amphitheater Parkway, Mountain
            View, CA 94043 (hereinafter: Google). Through certification
            according to the EU-US Privacy Shield
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
            Google guarantees that it will follow the EU’s data protection
            regulations when processing data in the United States. The Google
            Analytics service is used to analyze how our website is used. The
            legal basis is Art. 6 Para. 1 letter f) GDPR. Our legitimate
            interest lies in the analysis, optimization, and economic operation
            of our site. Usage and user-related information, such as IP address,
            place, time, or frequency of your visits to our website will be
            transmitted to a Google server in the United States and stored
            there. However, we use Google Analytics with the so-called
            anonymization function, whereby Google truncates the IP address
            within the EU or the EEA before it is transmitted to the US. The
            data collected in this way is in turn used by Google to provide us
            with an evaluation of visits to our website and what visitors do
            once there. This data can also be used to provide other services
            related to the use of our website and of the internet in general.
            Google states that it will not connect your IP address to other
            data.
          </p>
          <br />
          <p>
            In addition, Google provides further information with regard to its
            data protection practices at https: //
            www.google.com/intl/de/policies/privacy/partners, including options
            you can exercise to prevent such use of your data.
          </p>
          <br />
          <p>
            In addition, Google offers an opt-out add-on at
            https://tools.google.com/dlpage/gaoptout?hl=en in addition with
            further information. This add-on can be installed on the most
            popular browsers and offers you further control over the data that
            Google collects when you visit our website. The add-on informs
            Google Analytics‘ JavaScript (ga.js) that no information about the
            website visit should be transmitted to Google Analytics. However,
            this does not prevent information from being transmitted to us or to
            other web analytics services we may use as detailed in.
          </p>
          <br />
          {/* end-google-analytics */}
          {/* google-plug-in */}
          <p className="heading">GOOGLE + PLUG-IN</p>
          <p>
            We use the plug-in of the Google+ social network on our website.
            Google+ is an online service provided by Google Inc., 1600
            Amphitheater Parkway, Mountain View, CA 94043 (hereinafter: Google).
            Through certification according to the EU-US Privacy Shield
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
            Google guarantees that it will follow the EU’s data protection
            regulations when processing data in the United States. The legal
            basis is Art. 6 Para. 1 letter f) GDPR. Our legitimate interest lies
            in improving the quality of our website.
          </p>
          <br />
          <p>
            Further information about the possible plug-ins and their respective
            functions is available from Google at
            https://developers.google.com/+/web/
          </p>
          <br />
          {/* end-google-plug-in */}
          {/* fb-plug-in */}
          <div className="fb-plugin">
            <p className="heading">FACEBOOK PLUG-IN</p>
            <p>
              Our website uses the plug-in of the Facebook social network.
              Facebook.com is a service provided by Facebook Inc., 1601 S.
              California Ave, Palo Alto, CA 94304, USA. In the EU, this service
              is also operated by Facebook Ireland Limited, 4 Grand Canal
              Square, Dublin 2, Ireland, hereinafter both referred to as
              “Facebook.”
              <br />
              Through certification according to the EU-US Privacy Shield
              https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
            </p>
            <br />
            <p>
              Facebook guarantees that it will follow the EU’s data protection
              regulations when processing data in the United States.The legal
              basis is Art. 6 Para. 1 letter f) GDPR. Our legitimate interest
              lies in improving the quality of our website.
            </p>
            <br />
            <p>
              Further information about the possible plug-ins and their
              respective functions is available from Facebook at
              https://developers.facebook.com/docs/plugins
            </p>
            <br />
            <p>
              If the plug-in is stored on one of the pages you visit on our
              website, your browser will download an icon for the plug-in from
              Facebook’s servers in the USA. For technical reasons, it is
              necessary for Facebook to process your IP address. In addition,
              the date and time of your visit to our website will also be
              recorded. If you are logged in to Facebook while visiting one of
              our plugged-in websites, the information collected by the plug-in
              from your specific visit will be recognized by Facebook. The
              information collected may then be assigned to your personal
              account at Facebook. If, for example, you use the Facebook Like
              button, this information will be stored in your Facebook account
              and published on the Facebook platform. If you want to prevent
              this, you must either log out of Facebook before visiting our
              website or use an add-on for your browser to prevent the Facebook
              plug-in from loading.
            </p>
            <br />
            <p>
              Further information about the collection and use of data as well
              as your rights and protection options in Facebook’s privacy policy
              found at https://www.facebook.com/policy.php
            </p>
            <br />
          </div>
          {/* end-fb-plug-in */}
          {/* twitter-plugin */}
          <div className="twitter-plugin">
            <p className="heading">TWITTER PLUG-IN</p>
            <p>
              Our website uses the plug-in of the Twitter social network. The
              Twitter service is operated by Twitter Inc., 795 Folsom St., Suite
              600, San Francisco, CA 94107, USA (“Twitter”). Through
              certification according to the EU-US Privacy Shield
              https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active
            </p>
            <br />
            <p>
              Twitter guarantees that it will follow the EU’s data protection
              regulations when processing data in the United States. The legal
              basis is Art. 6 Para. 1 letter f) GDPR. Our legitimate interest
              lies in improving the quality of our website. If the plug-in is
              stored on one of the pages you visit on our website, your browser
              will download an icon for the plug-in from Twitter’s servers in
              the USA. For technical reasons, it is necessary for Twitter to
              process your IP address. In addition, the date and time of your
              visit to our website will also be recorded. If you are logged in
              to Twitter while visiting one of our plugged-in websites, the
              information collected by the plug-in from your specific visit will
              be recognized by Twitter. The information collected may then be
              assigned to your personal account at Twitter. If, for example, you
              use the Twitter Tweet button, this information will be stored in
              your Twitter account and may be published on the Twitter platform.
              To prevent this, you must either log out of Twitter before
              visiting our site or make the appropriate settings in your Twitter
              account.
            </p>
            <br />
            <p>
              Further information about the collection and use of data as well
              as your rights and protection options in Twitter’s privacy policy
              found at https://twitter.com/privacy
            </p>
            <br />
            <br />
          </div>
          {/* end-twitter-plugin */}
          {/* linked-inrecomendation */}
          <p className="heading">LINKED-IN RECOMMENDATIONS</p>
          <p>
            Our website uses the plug-in of the LinkedIn social network. The
            LinkedIn service is operated by LinkedIn Corporation, 2029 Stierlin
            Court, Mountain View, CA 94043, USA Through certification according
            to the EU-US Privacy Shield
            https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active
            <br />
            LinkedIn guarantees that it will follow the EU’s data protection
            regulations when processing data in the United States. The legal
            basis is Art. 6 Para. 1 letter f) GDPR. Our legitimate interest lies
            in improving the quality of our website. If the plug-in is stored on
            one of the pages you visit on our website, your browser will
            download an icon for the plug-in from LinkedIn servers in the USA.
            For technical reasons, it is necessary for LinkedIn to process your
            IP address. In addition, the date and time of your visit to our
            website will also be recorded. If you are logged in to LinkedIn
            while visiting one of our plugged-in websites, the information
            collected by the plug-in from your specific visit will be recognized
            by LinkedIn. The information collected may then be assigned to your
            personal account at LinkedIn. To prevent this, you must either log
            out of LinkedIn before visiting our site or make the appropriate
            settings in your LinkedIn account.
          </p>
          <br />
          <p>
            Further information about the collection and use of data as well as
            your rights and protection options in LinkedIn privacy policy found
            at https://linkedin.com/legal/privacy-policy
          </p>
          <br />
          {/* end-linked-inrecomendation */}
          {/* youtube */}
          <p className="heading">YOUTUBE</p>
          <p>
            We use YouTube on our website. This is a video portal operated by
            YouTube LLC, 901 Cherry Ave, 94066 San Bruno, CA, USA, hereinafter
            referred to as “YouTube”.
            <br />
            YouTube is a subsidiary of Google LLC, 1600 Amphitheater Parkway,
            Mountain View, CA 94043 USA, hereinafter referred to as “Google”.
            Through certification according to the EU-US Privacy Shield
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
          </p>
          <br />
          <p>
            Google and its subsidiary YouTube guarantee that they will follow
            the EU’s data protection regulations when processing data in the
            United States. We use YouTube in its advanced privacy mode to show
            you videos. The legal basis is Art. 6 Para. 1 letter f) GDPR. Our
            legitimate interest lies in improving the quality of our website.
            According to YouTube, the advanced privacy mode means that the data
            specified below will only be transmitted to the YouTube server if
            you actually start a video. Without this mode, a connection to the
            YouTube server in the USA will be established as soon as you access
            any of our webpages on which a YouTube video is embedded. This
            connection is required in order to be able to display the respective
            video on our website within your browser. YouTube will record and
            process at a minimum your IP address, the date and time the video
            was displayed, as well as the website you visited. In addition, a
            connection to the DoubleClick advertising network of Google is
            established. If you are logged in to YouTube when you access our
            site, YouTube will assign the connection information to your YouTube
            account. To prevent this, you must either log out of YouTube before
            visiting our site or make the appropriate settings in your YouTube
            account.
          </p>
          <br />
          <p>
            For the purpose of functionality and analysis of usage behavior,
            YouTube permanently stores cookies on your device via your browser.
            If you do not agree to this processing, you have the option of
            preventing the installation of cookies by making the appropriate
            settings in your browser. Further details can be found in the
            section about cookies above.
          </p>
          <br />
          <p>
            Further information about the collection and use of data as well as
            your rights and protection options in Google’s privacy policy found
            at https://policies.google.com/privacy
          </p>
          <br />
          {/* end-youtube */}
          {/* online-job */}
          <p className="heading">
            ONLINE JOB APPLICATIONS / PUBLICATIONS OF JOB ADVERTISEMENTS
          </p>
          <p>
            We offer you the opportunity to apply for jobs with our company via
            our website. In the case of these digital applications, we collect
            your application data electronically in order to process your
            application. The legal basis for this processing is §26 Para. 1
            sentence 1 BDSG in conjunction with Art. 88 Para. 1 GDPR. If you are
            hired as a result of the application process, we will store the data
            you provide during the application process in your personnel file
            for the purpose of the usual organizational and administrative
            process, naturally in compliance with further legal obligations. The
            legal basis for this processing is §26 Para. 1 sentence 1 BDSG in
            conjunction with Art. 88 Para. 1 GDPR. If we do not hire you, we
            will automatically delete the data submitted to us two months after
            the final decision is made. We will not delete the data, however, if
            we must store the data for legal reasons such as evidence of equal
            treatment of applicants, until any legal action is concluded, or
            four months. In this case, the legal basis is Art. 6 Para. 1 letter
            f) GDPR and §24 Para. 1 No. 2 BDSG. Our legitimate interest lies in
            any legal defense we may have to mount. If you expressly consent to
            a longer storage of your data, eg for your inclusion in a database
            of applicants or interested parties, the data will be processed
            further on the basis of your consent. The legal basis is then Art. 6
            Para. 1 lit. a) GDPR. You may withdraw your consent at any time with
            future effect per Art. 7 Para. 3 GDPR with future effect.
          </p>
          <br />
          {/*end- online-job */}
          {/* rest  */}
          <p className="heading">
            Model data protection statement for law firm Weiß & Partner
          </p>
          <br />
          <p className="heading">DATA PROTECTION</p>
          <br />
          <p>1. DATA PROTECTION AT A GLANCE</p>
          <br />
          <p className="heading">GENERAL INFORMATION</p>
          <p>
            The following information provides a simple overview of what happens
            to your personal data when you visit this website. Personal data are
            all data with which you can be personally identified. Detailed
            information on the subject of data protection can be found in our
            data protection declaration listed below this text.
          </p>
          <br />
          <p className="heading">DATA COLLECTION ON THIS WEBSITE</p>
          <br />
          <p className="heading">
            Who is responsible for data collection on this website?
          </p>
          <p>
            {" "}
            The data processing on this website is carried out by the website
            operator. You can find their contact details in the imprint of this
            website.
          </p>
          <br />
          <p className="heading">How do we collect your data?</p>
          <p>
            On the one hand, your data is collected when you provide it to us.
            This can be, for. Eg data that you enter in a contact form. Other
            data are automatically recorded by our IT systems when you visit the
            website. This is mainly technical data (eg internet browser,
            operating system or time of the page view). This data is collected
            automatically as soon as you enter this website. Some of the data is
            collected in order to ensure that the website is error-free. Other
            data can be used to analyze your user behavior.
          </p>
          <br />
          <p className="heading">
            What rights do you have with regard to your data?
          </p>
          <p>
            {" "}
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
            zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            Außerdem haben Sie das Recht, unter bestimmten Umständen die
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung
            unter „Recht auf Einschränkung der Verarbeitung“.
          </p>
          <br />
          <p className="heading">ANALYSE-TOOLS UND TOOLS VON DRITTANBIETERN </p>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit Cookies und mit
            sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
            erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
            zurückverfolgt werden. Sie können dieser Analyse widersprechen oder
            sie durch die Nichtbenutzung bestimmter Tools verhindern.
            Detaillierte Informationen zu diesen Tools und über Ihre
            Widerspruchsmöglichkeiten finden Sie in der folgenden
            Datenschutzerklärung.
          </p>
          <br />
          <p>2. HOSTING UND CONTENT DELIVERY NETWORKS (CDN)</p>
          <br />
          <p className="heading">EXTERNES HOSTING</p>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Webseitenzugriffe und sonstige Daten, die über eine Website
            generiert werden, handeln.
            <br />
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
            gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
            lit. b DSGVO) und im Interesse einer sicheren, schnellen und
            effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            <br /> Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie
            dies zur Erfüllung seiner Leistungspflichten erforderlich ist und
            unsere Weisungen in Bezug auf diese Daten befolgen.
          </p>
          <br />
          <p>3. ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN</p>
          <br />
          <p className="heading">DATENSCHUTZ</p>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
            diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
            erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <br />
          <p>
            We would like to point out that data transmission over the Internet
            (e.g. when communicating by e-mail) can have security gaps. A
            complete protection of the data against access by third parties is
            not possible.
          </p>
          <br />
          <p className="heading">NOTE TO THE RESPONSIBLE BODY</p>
          <p>The responsible body for data processing on this website is:</p>
          <p>Serhan Ili</p>
          <p>ILI.DIGITAL AG</p>
          <p>Ludwig-Erhard-Allee 20</p>
          <p>76131 Karlsruhe</p>
          <p>Phone: +49 721 6190970</p>
          <p>Email: info@ili.digital</p>
          <br />
          <p>
            The responsible body is the natural or legal person who, alone or
            jointly with others, decides on the purposes and means of processing
            personal data (e.g. names, email addresses, etc.).
          </p>
          <br />
          <p className="heading">
            REVOCATION OF YOUR CONSENT TO DATA PROCESSING
          </p>
          <p>
            Many data processing operations are only possible with your express
            consent. You can revoke your consent at any time. An informal e-mail
            to us is sufficient. The legality of the data processing carried out
            before the revocation remains unaffected by the revocation.
          </p>
          <br />
          <p className="heading">
            RIGHT TO OBJECT TO DATA COLLECTION IN SPECIAL CASES AND DIRECT
            ADVERTISING (ART. 21 GDPR)
          </p>
          <p className="heading">
            IF THE DATA PROCESSING BASED ON ART. 6 ABS. 1 LIT. E OR F GDPR, YOU
            HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR
            PERSONAL DATA FOR REASONS ARISING FROM YOUR SPECIAL SITUATION; THIS
            ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RELEVANT
            LEGAL BASIS ON WHICH PROCESSING IS BASED ON THIS PRIVACY POLICY. IF
            YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA
            UNLESS WE CAN PROVIDE COMPULSORY REASONS FOR PROCESSING THAT OCCURS,
            EXECUTES OR EXECUTES YOUR INTEREST, OBSERVES THE RIGHTS OBJECTION
            ACCORDING TO ART. 21 PARA. 1 GDPR).
          </p>
          <br />
          <p className="heading">
            IF YOUR PERSONAL DATA ARE PROCESSED IN ORDER TO OPERATE DIRECT
            ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
            PROCESSING OF PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING;
            THIS ALSO APPLIES TO PROFILING TO THE EXTENT IN CONNECTION WITH SUCH
            DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER
            BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION ACCORDING
            TO ART. 21 (2) GDPR).
          </p>
          <br />
          <p className="heading">
            RIGHT TO COMPLAIN WITH THE COMPETENT SUPERVISORY AUTHORITY
          </p>
          <p>
            In the event of violations of the GDPR, the data subjects have the
            right to lodge a complaint with a supervisory authority, in
            particular in the member state of their habitual residence, their
            place of work or the place of the alleged violation. The right of
            appeal exists without prejudice to other administrative or judicial
            remedies.
          </p>
          <br />
          <p className="heading">RIGHT TO DATA PORTABILITY</p>
          <p>
            You have the right to have data that we process automatically on the
            basis of your consent or in fulfillment of a contract handed over to
            you or to a third party in a common, machine-readable format. If you
            request the direct transfer of the data to another person
            responsible, this will only be done if it is technically feasible.
          </p>
          <br />
          <p className="heading">SSL or TLS ENCRYPTION</p>
          <p>
            For security reasons and to protect the transmission of confidential
            content, such as orders or inquiries that you send to us as the
            website operator, this site uses SSL or TLS encryption. You can
            recognize an encrypted connection by the fact that the address line
            of the browser changes from „http: //“ to „https: //“ and by the
            lock symbol in your browser line.
          </p>
          <p>
            If the SSL or TLS encryption is activated, the data that you
            transmit to us cannot be read by third parties.
          </p>
          <br />
          <p className="heading">INFORMATION, DELETION AND CORRECTION</p>
          <p>
            Within the framework of the applicable legal provisions, you have
            the right to free information about your stored personal data, their
            origin and recipient and the purpose of the data processing and, if
            necessary, a right to correct or delete this data. You can contact
            us at any time at the address given in the legal notice if you have
            any further questions on the subject of personal data.
          </p>
          <br />
          <p className="heading">RIGHT TO RESTRICTION OF PROCESSING</p>
          <p>
            You have the right to request that the processing of your personal
            data be restricted. You can contact us at any time at the address
            given in the legal notice. The right to restriction of processing
            exists in the following cases:
          </p>
          <br />
          <ul>
            <li>
              If you dispute the accuracy of your personal data stored by us, we
              usually need time to check this. For the duration of the test, you
              have the right to request that the processing of your personal
              data be restricted.
            </li>
            <li>
              If the processing of your personal data happened / happens
              unlawfully, you can request the restriction of the data processing
              instead of the deletion.
            </li>
            <li>
              If we no longer need your personal data, but you need them to
              exercise, defend or assert legal claims, you have the right to
              request that the processing of your personal data be restricted
              instead of being deleted.
            </li>
            <li>
              If you have lodged an objection in accordance with Art. 21
              Paragraph 1 GDPR, your interests and ours must be weighed up. As
              long as it is not yet clear whose interests prevail, you have the
              right to request that the processing of your personal data be
              restricted.
            </li>
            <li>
              If you have restricted the processing of your personal data, this
              data – apart from its storage – may only be allowed with your
              consent or for the establishment, exercise or defense of legal
              claims or for the protection of the rights of another natural or
              legal person or for reasons of important public interest processed
              by the European Union or a member state.
            </li>
          </ul>
          <br />
          <p>4. DATA COLLECTION ON THIS WEBSITE</p>
          <br />
          <p className="heading">COOKIES</p>
          <p>
            Our Internet pages use so-called „cookies“. Cookies are small text
            files and do not cause any damage to your device. They are stored
            either temporarily for the duration of a session (session cookies)
            or permanently (permanent cookies) on your device. Session cookies
            are automatically deleted after your visit. Permanent cookies remain
            stored on your device until you delete them yourself or your web
            browser automatically resolves them.
          </p>
          <br />
          <p>
            In some cases, cookies from third-party companies can also be stored
            on your device when you enter our website (third-party cookies).
            These enable us or you to use certain third-party services (e.g.
            cookies for processing payment services).
          </p>
          <br />
          <p>
            Cookies have different functions. Numerous cookies are technically
            necessary because certain website functions would not work without
            them (e.g. the shopping cart function or the display of videos).
            Other cookies are used to evaluate user behavior or to display
            advertising.
          </p>
          <br />
          <p>
            Cookies that are required to carry out the electronic communication
            process or to provide certain functions you require (e.g. shopping
            cart function) are stored on the basis of Art. 6 Para. 1 lit.f GDPR.
            The website operator has a legitimate interest in the storage of
            cookies for the technically error-free and optimized provision of
            its services. If a corresponding consent has been requested (e.g.
            consent to the storage of cookies), the processing takes place
            exclusively on the basis of Art. 6 Para. 1 lit. a GDPR; the consent
            can be revoked at any time.
          </p>
          <br />
          <p>
            You can set your browser so that you are informed about the setting
            of cookies and only allow cookies in individual cases, exclude the
            acceptance of cookies for certain cases or in general, and activate
            the automatic deletion of cookies when you close the browser. If
            cookies are deactivated, the functionality of this website may be
            restricted.
          </p>
          <br />
          <p>
            Insofar as cookies are used by third-party companies or for analysis
            purposes, we will inform you of this separately in the context of
            this data protection declaration and, if necessary, request your
            consent.
          </p>
          <br />
          <p className="heading">SERVER LOG FILES</p>
          <p>
            The provider of the pages automatically collects and stores
            information in so-called server log files, which your browser
            automatically transmits to us. These are:
          </p>
          <ul>
            <li>Browser type and browser version</li>
            <li>operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
          <br />
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website – hierzu müssen die Server-Log-Files erfasst werden.
          </p>
          <br />
          <p className="heading">KONTAKTFORMULAR</p>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <br />
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
            auf unserem berechtigten Interesse an der effektiven Bearbeitung der
            an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
            abgefragt wurde.
          </p>
          <br />
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <br />
          <p className="heading">INQUIRIES BY EMAIL, TELEPHONE OR TELEFAX</p>
          <p>
            If you contact us by e-mail, telephone or fax, your request,
            including all personal data derived from it (name, request) will be
            stored and processed by us for the purpose of processing your
            request. We do not pass on this data without your consent.
          </p>
          <p>
            This data is processed on the basis of Article 6 (1) (b) GDPR,
            provided that your request is related to the performance of a
            contract or is necessary to carry out pre-contractual measures. In
            all other cases, the processing is based on your consent (Art. 6
            Para. 1 lit. a GDPR) and / or on our legitimate interests (Art. 6
            Para. 1 lit.f GDPR), as we have a legitimate interest in the
            effective Processing the inquiries sent to us.
          </p>
          <p>
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten
            verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
            Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
            Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
            gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <br />
          <p>5. SOZIALE MEDIEN</p>
          <br />
          <p className="heading">INSTAGRAM PLUGIN</p>
          <br />
          <p>
            Auf dieser Website sind Funktionen des Dienstes Instagram
            eingebunden. Diese Funktionen werden angeboten durch die Instagram
            Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert. Wenn
            Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch
            Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem
            Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
            Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass
            wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes
            Interesse an einer möglichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt
            die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
            a DSGVO; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <br />
          <p>
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von Instagram: https://instagram.com/about/legal/privacy/.
          </p>
          <br />
          <p>6. NEWSLETTER</p>
          <br />
          <p className="heading">NEWSLETTERDATEN</p>
          <p>
            Wenn Sie den auf der Website angebotenen Newsletter beziehen
            möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
            Informationen, welche uns die Überprüfung gestatten, dass Sie der
            Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
            Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur
            auf freiwilliger Basis erhoben. Diese Daten verwenden wir
            ausschließlich für den Versand der angeforderten Informationen und
            geben diese nicht an Dritte weiter.
          </p>
          <br />
          <p>
            Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
            Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.
            6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung
            der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des
            Newsletters können Sie jederzeit widerrufen, etwa über den
            „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits
            erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <br />
          <p>
            Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
            Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei
            uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
            Abbestellung des Newsletters aus der Newsletterverteilerliste
            gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden
            bleiben hiervon unberührt.
          </p>
          <p>
            Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
            E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
            einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die
            Daten aus der Blacklist werden nur für diesen Zweck verwendet und
            nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem
            Interesse als auch unserem Interesse an der Einhaltung der
            gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes
            Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung
            in der Blacklist ist zeitlich nicht befristet. Sie können der
            Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes
            Interesse überwiegen.
          </p>
          <br />
          <p className="heading">GOOGLE WEB FONTS</p>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <br />
          <p>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
            den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.
            Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes
            Interesse an der einheitlichen Darstellung des Schriftbildes auf
            seiner Webseite. Sofern eine entsprechende Einwilligung abgefragt
            wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt
            die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
            a DSGVO; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </p>
          <br />
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            https://developers.google.com/fonts/faq und in der
            Datenschutzerklärung von Google:
            https://policies.google.com/privacy?hl=de.
          </p>
          <br />
          <p className="heading">GOOGLE MAPS</p>
          <p>
            Diese Seite nutzt über eine API den Kartendienst Google Maps.
            Anbieter ist die Google Ireland Limited („Google“), Gordon House,
            Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP
            Adresse zu speichern. Diese Informationen werden in der Regel an
            einen Server von Google in den USA übertragen und dort gespeichert.
            Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Datenübertragung.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote und an einer leichten
            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
            stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
            DSGVO dar.
          </p>
          <br />
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von Google:
            https://policies.google.com/privacy?hl=de.
          </p>
          <br />
          <p className="heading">GOOGLE RECAPTCHA</p>
          <p>
            Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser
            Website. Anbieter ist die Google Ireland Limited („Google“), Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <br />
          <p>
            The purpose of reCAPTCHA is to check whether data is entered on this
            website (eg in a contact form) by a person or by an automated
            program. To do this, reCAPTCHA analyzes the behavior of the website
            visitor based on various characteristics. This analysis begins
            automatically as soon as the website visitor enters the website. For
            the analysis, reCAPTCHA evaluates various information (eg IP
            address, length of stay of the website visitor on the website or
            mouse movements made by the user). The data collected during the
            analysis are forwarded to Google.
          </p>
          <br />
          <p>
            The reCAPTCHA analyzes run completely in the background. Website
            visitors are not informed that an analysis is taking place.
          </p>
          <p>
            The storage and analysis of the data takes place on the basis of
            Art. 6 Para. 1 letter f GDPR. The website operator has a legitimate
            interest in protecting its web offers from abusive automated spying
            and from SPAM. If a corresponding consent has been requested (eg
            consent to the storage of cookies), processing takes place
            exclusively on the basis of Art. 6 Paragraph 1 lit. a GDPR; the
            consent can be revoked at any time.
          </p>
          <br />
          <p>
            Further information on Google reCAPTCHA can be found in the Google
            data protection provisions and the Google Terms of Use under the
            following links: https://policies.google.com/privacy?hl=de and
            https://policies.google.com/terms?hl=de.
          </p>
          <br />
          <p>
            Source:{" "}
            <a
              style={{ color: "#7CA2A6" }}
              href={
                "https://www.e-recht24.de/muster-datenschutzerklaerung.html"
              }
            >
              {/* <u > */}
              https://www.e-recht24.de/muster-datenschutzerklaerung.html
              {/* </u> */}
            </a>
          </p>
          {/* end-rest  */}
        </div>
      </div>
      <div className="bg-img-sub" style={{ height: "72px" }}></div>
    </>
  );
};

export default DataPolicy;
