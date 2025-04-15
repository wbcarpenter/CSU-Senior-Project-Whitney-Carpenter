SecurePass Requirements
===================================================

**Student Name**: Whitney Carpenter  
**Degree and Major**: B.S. in Cybersecurity  
**Project Advisor Name**: Dr. Sean Hayes  
**Expected Graduation Date**: May 2026


Requirements
-----------------

Requirement #: 1    Requirement Type: 9  
Description: The extension will evaluate password strength based on criteria such as length, complexity, and entropy.  
Rationale: Weak passwords are one of the most common vulnerabilities leading to security breaches, so evaluating password strength will mitigate this issue.  
Origination: Whitney Carpenter  
Fit Criterion: The password strength evaluation will use an algorithm to assess at least the three criteria mentioned.  
Priority: 1  
Dependencies: none  

Requirement #: 2    Requirement Type: 9  
Description: The extension will provide real-time feedback on the strength of the passwords entered by the users.  
Rationale: Real-time feedback allows users to adjust their passwords immediately, improving security on the spot.  
Origination: Whitney Carpenter  
Fit Criterion: Feedback will be displayed within 2 seconds of password entry.  
Priority: 5  
Dependencies: 1  

Requirement #: 3    Requirement Type: 9  
Description: The extension will offer actionable suggestions to improve password strength.  
Rationale: Many users lack knowledge of how to create strong passwords, so these suggestions can guide them.  
Origination: Whitney Carpenter  
Fit Criterion: The suggestions for improvement will be displayed clearly based on the password evaluation.  
Priority: 7  
Dependencies: 1  

Requirement #: 4    Requirement Type: 9  
Description: All password evaluations will be performed locally within the extension without transmitting any data.  
Rationale: Local processing ensures users' privacy and adherence to security best practices.  
Origination: Whitney Carpenter  
Fit Criterion: Password evaluations must not trigger network activity, which will be verified through testing.  
Priority: 3  
Dependencies: none  

Requirement #: 5    Requirement Type: 10  
Description: The extension interface will display feedback in a visually clear and accessible format.  
Rationale: A visually clear and accessible format enhances usability and helps users understand the feedback.  
Origination: Whitney Carpenter  
Fit Criterion: Feedback will be displayed using clear visual indicators, such as color-coded labels and concise textual explanations.  
Priority: 12  
Dependencies: 2  

Requirement #: 6    Requirement Type: 11  
Description: The user interface will be intuitive and accessible to non-technical users.  
Rationale: An intuitive UI improves usability and increases the amount of users of the extension.  
Origination: Whitney Carpenter  
Fit Criterion: The feedback and controls must be understood by users with no technical background during the testing stage.  
Priority: 8  
Dependencies: 1, 5  

Requirement #: 7    Requirement Type: 11  
Description: Feedback and suggestions shall include brief educational insights about password security.  
Rationale: Brief educational insights within the feedback will improve users' knowledge for future passwords that they create.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will provide a brief insight about password security, ensuring that during testing, at least 90% of users correctly understand why their password was rated weak or strong.  
Priority: 13  
Dependencies: 1, 3, 5  

Requirement #: 8    Requirement Type: 11  
Description: The extension will integrate smoothly with Chrome and require minimal setup by the user.   
Rationale: This will ensure users can install and start using the extension without technical obstacles.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will install with a single click from the Chrome Web Store.  
Priority: 14  
Dependencies: 1, 2, 6  

Requirement #: 9    Requirement Type: 12  
Description: Feedback will be displayed within 2 seconds of password entry.  
Rationale: Quick feedback ensures a smooth user experience, allowing users to adjust passwords instantly.  
Origination: Whitney Carpenter  
Fit Criterion: The product shall respond in less than 1 second for 90 per cent of the interrogations. No response shall take longer than 2.5 seconds.  
Priority: 6  
Dependencies: 1, 4  

Requirement #: 10    Requirement Type: 12  
Description: The extension will not compromise user security under any circumstances.  
Rationale: The extension not compromising user security ensures that feedback does not inadvertently weaken password protection.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will provide security-focused recommendations that align with industry standards.  
Priority: 9  
Dependencies: 1, 3, 9  

Requirement #: 11    Requirement Type: 12  
Description: The extension will be available and functional whenever Chrome is active, barring updates.  
Rationale: The extension should be consistently available whenever Chrome is active to ensure users can rely on it for password evaluations.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will load automatically when a password field is detected.  
Priority: 10  
Dependencies: 1, 4, 6  

Requirement #: 12    Requirement Type: 12  
Description: The extension will handle password evaluations efficiently without consuming excessive browser resources.  
Rationale: The extension must efficiently handle password evaluations, ensuring that it will not negatively impact browser performance.  
Origination: Whitney Carpenter  
Fit Criterion: CPU and memory usage must remain below 5% of total browser resources during testing.  
Priority: 11  
Dependencies: 1, 2, 4  

Requirement #: 13    Requirement Type: 12  
Description: The extension could be expanded to work on other browsers, such as Edge or Firefox.  
Rationale: Expanding browser support can increase the extension's reach and usability.  
Origination: Whitney Carpenter
Fit Criterion: The extension would have to be refactored to comply with Edge or Firefox-specific APIs.  
Priority: 20  
Dependencies: none  

Requirement #: 14    Requirement Type: 13  
Description: The extension will interact exclusively within the Chrome browser environment.  
Rationale: The extension must interact exclusively within the Chrome browser to ensure seamless functionality without external system dependencies.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will correctly identify password fields and provide feedback within Chrome.  
Priority: 15  
Dependencies: 1, 2, 4  

Requirement #: 15    Requirement Type: 13  
Description: The extension will be distributed via the Chrome Web Store for ease of access.  
Rationale: The extension should be distributed through the Chrome Web Store to ensure easy access and credibility for users.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will be packaged and submitted to the Chrome Web Store, successfully passing all review and security compliance checks.  
Priority: 18  
Dependencies: 10, 6  

Requirement #: 16    Requirement Type: 13  
Description: The extension will be released by Spring 2026.  
Rationale: The extension must meet the senior project timeline to align with academic requirements.  
Origination: Whitney Carpenter  
Fit Criterion: The extension will be fully developed, tested, and submitted according to the timeline outlined in the project schedule.  
Priority: 16  
Dependencies: all  

Requirement #: 17    Requirement Type: 14  
Description: Code will be modular and well-documented to simplify debugging and updates.  
Rationale: The extension must be designed for easy maintenance to allow future updates, bug fixes, and enhancements.  
Origination: Whitney Carpenter  
Fit Criterion: The codebase will be modular, well-documented, and structured for ease of modification, verified through code reviews.  
Priority: 17  
Dependencies: 1, 4, 6  

Requirement #: 18    Requirement Type: 14  
Description: The extension will allow future modifications for enhanced password strength algorithms.  
Rationale: The extension must be adaptable to support future improvements.  
Origination: Whitney Carpenter  
Fit Criterion: The architecture will allow for future feature integration with minimal rework.  
Priority: 19  
Dependencies: 1, 3, 7  

Requirement #: 19    Requirement Type: 15  
Description: Password evaluations will occur locally, with no passwords or sensitive data being stored or transmitted by the extension.  
Rationale: Protecting user privacy is a core principle of this project.  
Origination: Whitney Carpenter  
Fit Criterion: Password evaluations will occur locally without leaving the user's browser.  
Priority: 2  
Dependencies: 4  

Requirement #: 20    Requirement Type: 17  
Description: The extension will comply with NIST guidelines and other best practices for password security.  
Rationale: Compliance with established standards ensures the extension meets industry expectations and legal requirements.  
Origination: Whitney Carpenter  
Fit Criterion: Features and algorithms must align with NIST guidelines as verified through documentation reviews and testing.  
Priority: 4  
Dependencies: 1, 4, 9  
