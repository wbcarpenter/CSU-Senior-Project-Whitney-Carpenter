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
Priority: 9
Dependencies: 2

Requirement #: 6    Requirement Type: 11
Description: The user interface will be intuitive and accessible to non-technical users.
Rationale: An intuitive UI improves usability and increases the amount of users of the extension.
Origination: Whitney Carpenter
Fit Criterion: The feedback and controls must be understood by users with no technical background during the testing stage.
Priority: 8
Dependencies: 1, 5

Requirement #: 7    Requirement Type: 12
Description: The extension could be expanded to work on other browsers, such as Edge or Firefox.
Rationale: Expanding browser support can increase the extension's reach and usability.
Origination: Whitney Carpenter
Fit Criterion: The extension would have to be refactored to comply with Edge or Firefox-specific APIs.
Priority: 10
Dependencies: none

Requirement #: 8    Requirement Type: 15
Description: Feedback will be displayed within 2 seconds of password entry.
Rationale: Quick feedback ensures a smooth user experience, allowing users to adjust passwords instantly.
Origination: Whitney Carpenter
Fit Criterion: The product shall respond in less than 1 second for 90 per cent of the interrogations. No response shall take longer than 2.5 seconds.
Priority: 6
Dependencies: 1, 4

Requirement #: 9    Requirement Type: 15
Description: No passwords or sensitive data will be stored or transmitted by the extension.
Rationale: Protecting user privacy is a core principle of this project.
Origination: Whitney Carpenter
Fit Criterion: Password evaluations will occur locally without leaving the user's browser.
Priority: 2
Dependencies: 4

Requirement #: 10    Requirement Type: 17
Description: The extension will comply with NIST guidelines and other best practices for password security.
Rationale: Compliance with established standards ensures the extension meets industry expectations and legal requirements.
Origination: Whitney Carpenter
Fit Criterion: Features and algorithms must align with NIST guidelines as verified through documentation reviews and testing.
Priority: 4
Dependencies: 1, 4, 9
