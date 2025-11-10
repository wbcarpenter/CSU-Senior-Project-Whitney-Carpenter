# SecurePass Test Plan

**Student Name:** Whitney Carpenter  
**Degree and Major:** B.S. in Cybersecurity  
**Project Advisor:** Dr. Sean Hayes  
**Expected Graduation Date:** May 2026  

---

## IDENTIFICATION INFORMATION

### **Product**
**Product Name:** SecurePass

### **Project Description:**
SecurePass is a Chrome browser extension designed to evaluate password strength and provide users with instant, local feedback.  It assesses password length, complexity, and entropy, offering real-time suggestions to help users create stronger passwords.  All password evaluations occur locally, ensuring complete privacy and data security.

---

## TESTING OBJECTIVES
The objective of this test plan is to verify that SecurePass meets all defined requirements established in the Requirements Document.  Testing will ensure:
- Password strength evaluation functions correctly and consistently
- Feedback is provided in real-time without noticable delay
- No password data is transmitted or stored externally
- The user interface is clear, accesible, and functional across devices

---

## FEATURES TO BE TESTED

| # | Feature | Related Requirement(s) | Description |
|---|---------|------------------------|-------------|
| 1 | Password strength evaluation | Req. 1 | Evaluates password based on length, complexity, and entropy |
| 2 | Real-time feedback | Req. 2, 9 | Provides strength rating within 2 seconds of entry |
| 3 | Suggestions for improvement | Req. 3 | Displays actionable recommendations |
| 4 | Local evaluation only | Req. 4, 19 | Ensures all data stays within the user's browser |
| 5 | User interface design | Req. 5, 6 | Displays clear, color-coded, and accessible feedback |
| 6 | Educational insights | Req. 7 | Provides brief password security |
| 7 | Performance and responsiveness | Req. 9, 12 | Confirms low CPU/memory usage |
| 8 | Chrome Compatibility | Req. 8, 14 | Verifies extension integrates smoothly with Chrome |
| 9 | Security Compliance | Req. 10, 20 | Meets NIST guidelines and cybersecurity best practices |
| 10 | Automatic activation and availability | Req. 11 | Confirms the extension loads automatically when Chrome is active |

---

## FEATURES NOT TO BE TESTED

| Feature | Reason|
|---------|-------|
| Cross-browser compatibility (Edge, Firefox) | Future enhancement (Req. 13) |
| Chrome Web Store publication | Not in testing phase, deployment only (Req. 15) |
| Future algorithm upgrades | Beyond current project scope (Req. 18) |

---

## UNIT TESTING

### **Unit Test Strategy and Objectives**
Unit testing will verify the correct behavior of individual components within SecurePass. The goal is to ensure that each function operates as intended before integration. 

### Scope
- **Included:**
  - Password strength evaluation algorithm
  - Feedback rendering module
  - Suggestion generation function
- **Excluded:**
  - Chrome API integrations
  - Full user interface layout
  - External data transmission

### Testing Approach
- Use **Jest** or **Mocha** for automated JavaScript testing.
- Execute all tests in a **local offline environment** to verify no network communication.
- Evaluate both normal and edge case passwords for accuracy and consistency.
- Record results in unit test logs with pass/fail indicators.

### Test Environment
**Hardware:** Windows 10 / 11 PC, 8GB RAM minimum
**Software:** Chrome Browser (latest version), Visual Studio Code, Node.js
**Network:** Local environment, offline tests where possible

### **UNIT TEST CASES**

| # | Objective | Input | Expected Results | Test Deliverables |
|---|-----------|-------|------------------|-------------------|
| 1 | Verify weak password detection | "password123" | Strength: Weak | Unit test report |
| 2 | Verfiy strong password detection | "L!m@x#9Qz2" | Strength: Strong | Unit test report |
| 3 | Handle long input efficiently | 256-character random string | Strength: Strong | Performance log |
| 4 | Check suggestion display | "123456" | Displays suggestions for improvement | Unit test report |
| 5 | Confirm no network calls | Random passwords | No network activity recorded | Browser dev tools log |
| 6 | Handle special characters | "pä$$WørD!" | Strength: Medium | Unit test report |

### Acceptance Criteria
- 100% of unit test cases must pass before integration begins.
- All password evaluations must occur locally with no external network activity.
- Feedback must appear within **2 seconds** of password entry.

---

## USER-ACCEPTANCE TESTING (UAT)

### User-Acceptance Test Strategy and Objectives
User-Acceptance Testing (UAT) will ensure that SecurePass is intuitive, responsive, and educational for end users.  It evaluates how effectively users understand and interact with password feedback.

### Scope
- Focuses on usability, speed, and clarity of password feedback.
- Excludes performance benchmarking and Chrome API verification

### Participants
- 5-10 users, including cybersecurity students and non-technical participants.

### Test Environment
- **Platform:** Chrome browser
- **Operating System:** Windows 10/11
- **Location:** Controlled lab or classroom environment
- **Monitoring:** Observation and short feedback surveys

### UAT Procedure
1. Install SecurePass in Chrome.
2. Create various passwords to test the strength feedback.
3. Observe speed, clarity, and understanding of results.
4. Complete a post-test survey using a 5-point Likert scale on usability and understanding.

### User-Acceptance Test Cases

| # | Test Item | Expected Results | Actual Results | Date |
|---|-----------|------------------|----------------|------|
| 1 | User creates a weak password | Receives “Weak” rating with clear improvement tips | TBD | TBD |
| 2 | User creates a strong password | Receives “Strong” rating, no extra tips shown | TBD | TBD |
| 3 | Evaluate clarity of feedback | 90% of users understand feedback without guidance | TBD | TBD |
| 4 | Evaluate educational tips | 90% of users report increased awareness of password security | TBD | TBD |
| 5 | Test installation ease | Installed and functional within 2 minutes | TBD | TBD |
| 6 | Test performance and speed | Feedback appears within 2 seconds | TBD | TBD |

---

## TEST DELIVERABLES

- SecurePass Test Plan
- Unit Test Scripts and Logs
- User Acceptance Testing Forms and Reports
- Defect/Enhancement Logs
- Final Test Summary Report

---

## SCHEDULE

| Phase | Activity | Estimated Completion |
|-------|----------|----------------------|
| Week 5-7 | Develop unit test cases | October 2025 |
| Week 8-10 | Draft integration and regression test plans | November 2025 |
| Week 11-12 | Prepare user-acceptance test outline and feedback forms | November 2025 |
| Week 13-15 | Finalize and submit Test Plan and source code | December 2025 |
| Spring 2026 | Execute all testing and record results | March-April 2026 |

## APPENDIX

**References:**
- Verizon (2024). *Data Breach Investigations Report.*  
  [https://www.verizon.com/business/resources/T484/reports/2024-dbir-data-breach-investigations-report.pdf](https://www.verizon.com/business/resources/T484/reports/2024-dbir-data-breach-investigations-report.pdf)
- NIST SP 800-63B: *Digital Identity Guidelines — Authentication and Lifecycle Management*




