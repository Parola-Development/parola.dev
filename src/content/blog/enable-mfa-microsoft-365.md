---
title: "How to enable MFA on Microsoft 365 — and why it's now mandatory for Cyber Essentials"
description: "Since Cyber Essentials v3.1, multi-factor authentication on all cloud services is a hard requirement. Here's exactly how to enable it using Security Defaults and Conditional Access."
pubDate: 2026-06-10
category: "Microsoft 365"
draft: false
---

If your business uses Microsoft 365, enabling multi-factor authentication (MFA) is no longer optional for Cyber Essentials — it's a mandatory requirement under v3.1 of the standard and remains so in the current v3.3 release.

This is the single most common reason small businesses fail their first Cyber Essentials assessment. The good news is it takes about five minutes to enable for your whole organisation.

## What MFA means and why it matters

Multi-factor authentication means users need two things to sign in: their password, and a second verification — usually a code from an app on their phone. Even if an attacker steals a password, they can't get in without the second factor.

For cloud services like Microsoft 365, this is now treated as a hard requirement by the NCSC. The Cyber Essentials question set asks directly whether MFA is enabled for all user accounts on all cloud services.

## The quickest way: Security Defaults

For most small businesses, enabling Security Defaults in Microsoft Entra ID (formerly Azure AD) is the right approach. It takes a few clicks and covers all users automatically.

**Steps:**

1. Sign in to the [Microsoft 365 Admin Centre](https://admin.microsoft.com) with a Global Administrator account
2. In the left menu, go to **Identity** (or navigate to [entra.microsoft.com](https://entra.microsoft.com))
3. Go to **Overview** → **Properties**
4. Click **Manage security defaults** at the bottom of the page
5. Toggle **Security defaults** to **Enabled**
6. Click **Save**

That's it. On their next sign-in, each user will be prompted to register the Microsoft Authenticator app. The process takes about two minutes per user.

**What Security Defaults does:**
- Enforces MFA for all users (including admins)
- Blocks legacy authentication protocols that bypass MFA
- Requires MFA for privileged actions

## The more flexible way: Conditional Access

If you're on Microsoft 365 Business Premium (which includes Entra ID P1), you can use Conditional Access policies instead of Security Defaults. This gives you more control — for example, you could require MFA only when signing in from outside the office network.

For Cyber Essentials purposes, the simpler Security Defaults approach is sufficient and easier to demonstrate to an assessor.

## What users need to do

Once Security Defaults is enabled, each user will be asked to set up MFA on their next sign-in. They'll need:

- The **Microsoft Authenticator** app installed on their smartphone (recommended)
- Or an alternative method: SMS code or a hardware token

The Authenticator app is available free from the App Store or Google Play. Walk your team through the setup before enabling — it avoids confusion and support calls.

## Legacy authentication — what to watch for

Security Defaults automatically blocks legacy authentication, which means any apps using old-style username/password connections to Microsoft 365 will stop working. Common culprits:

- Older versions of Outlook (pre-2016)
- Some shared mailbox setups
- Third-party apps connecting to Exchange via basic authentication

Check your environment for these before enabling MFA. If you're unsure, [get in touch](/contact) and we can review your setup first.

---

Enabling MFA is one of the most impactful security steps you can take. If you need help with this or any other part of the Cyber Essentials process, [book a free call](/contact) and we'll walk through it with you.
