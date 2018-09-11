---
layout: page
title: Adelaide law firm
description: In-house infrastructure upgrade and data migration
tags: [system administration, sysadmin, small business, SME, office365, microsoft, technology, upgrade, hardware, IT, lan, wlan, wifi, virtual machine, vm]
date: 2017/03/17
image: "/assets/img/law-firm/background.jpg"
---

I was approached by a small law firm to help the company to overcome current technical challenges. The company never had an active system administrator and unfortunately does not have a budget to keep one full-time, that means that my proposed solution should:
- Rely on as little on-premises hardware as possible
- Have 24/7 professional customer support
- Be remotely maintainable
- Have a gradual usage learning curve to decrease possible business technical outages
- Outperform current infrastructure.

Here are just a few issues what company faced regularly:
- Local email server would stop responding. Former sys admin needed to be contacted in order to resolve the issue - the process can easily take months.
- No one could see and manage each other calendars. There was a local Windows XP ESXi VM with a calendar software what can only be accessible by one person at a time.
- File sharing and storage was on a separate Windows XP VM on a same local server with a maximum storage space of 150GB. The server could only be upgraded to the maximum of 500GB SAS drives. Two out 5 drives were failing.
- No WiFi available. Employees were working on laptops connected with a wire to a switch, not being able to move in the office.

After interviewing company employees and researching named issues I was able to resolve the following matters:
- Upgraded the Microsoft Office365 subscription tier to Business Premium what includes Outlook.
- Created a shared calendar what each employee can see, edit and access simultaneously.
- Organised the email migration from the local email server to Outlook.
- Worked closely with Microsoft Office365 technicians to troubleshoot platform performance and email retention policy issues.
- Updated DNS records to point to Microsoft Office 365 Outlook services.
- Purchased online hosting.
- Renewed the domain name for the next year.
- Migrated data from local server file storage to OneDrive.
- Made all the ESXi VMs be accessible from local VMware Workstation 12.
- Upgraded RAM on all company laptops to 8GB.
- Introduced [Linksys XAC1900](https://www.linksys.com/au/p/P-XAC1900/) to handle all the wireless networking.
- Submitted old router, modem, patch panel, server and internet cables to the nearest electronics recycling facility.

Further, the company founder decided to close his main office and move operations to home office. Home office had to accommodate the new changes in the business. Based on my advice the following actions were performed:
- Convert former employees Office365 Outlook accounts into Shared Mailboxes and remove their licenses. This gave the founder a chance to be able to receive emails from all his former employees’ emails and respond from his email address. This action also reduced the number of active Office365 subscriptions narrowing it down just to one - significantly decreasing the running expenses. I found this [Microsoft KB article](https://support.office.com/en-us/article/remove-a-former-employee-from-office-365-44d96212-4d90-4027-9aa9-a95eddb367d1) particulary useful.
- In order to bring [Lexmark x656de](https://www.lexmark.com/en_nz/printer/4834/Lexmark-X656de) MFP online I had to setup powerline network with two [TP-Link TL-PA7010P Gigabit Passthrough](https://www.tp-link.com/au/products/details/cat-18_TL-PA7010P-KIT.html) adapters.
