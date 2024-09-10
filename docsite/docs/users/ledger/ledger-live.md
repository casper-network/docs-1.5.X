---
title: Ledger and Ledger Live
---

# Using Ledger and Ledger Live

This guide will help you connect accounts from the Ledger device to the [Ledger Live](https://www.ledger.com/ledger-live) application to send and receive CSPR tokens.

:::important

From Ledger Live version 2.73.1, Casper accounts can be added from the Ledger hardware wallet to Ledger Live.

:::

## Prerequisites

1. Configure your Ledger and the Ledger Live application as described in the [Getting Started with Ledger Live](https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true) article.
2. Install the Casper app as described [here](./ledger-setup.md).

## Connecting to Ledger Live {#connect-ledge-live}

This section describes using the Ledger device with the [Ledger Live](https://www.ledger.com/ledger-live) application and your Casper accounts.

1. Connect the Ledger device to your computer and unlock it by entering your device PIN.

![Connect the Ledger to your computer](./_ledger-cspr-live/ledger-live/0-connect.png)

2. Allow Ledger Manager to connect by clicking the two buttons on the Ledger device.

![Unlock the ledger](./_ledger-cspr-live/ledger-live/1-unlock.png)

3. Ledger Live will verify your Ledger device and display the following confirmation:

![Confirmation that the Ledger is genuine](./_ledger-cspr-live/ledger-live/2-confirmation.png)

4. Click **My Ledger** in the left-side navigation bar, and search for *Casper* or *CSPR* in the **App catalog**. 

![Confirmation that the Ledger is genuine](./_ledger-cspr-live/ledger-live/3-app-cspr.png)

5. To import a Casper account from the Ledger device into the Ledger Live application, click on the **Add account** link.

![Click the Add account link](./_ledger-cspr-live/ledger-live/4-add-account.png)

6. Open the Casper app on your Ledger device.

![Open the Casper app](./_ledger-cspr-live/ledger-live/5-add-account.png)

7. Ledger Live will import the first account listed on your Ledger device. Choose a name for the account.

![Name the account](./_ledger-cspr-live/ledger-live/6-add-account.png)

8. After synchronizing the account, Ledger Live will confirm that the account was successfully added.

![Synchronizing the account](./_ledger-cspr-live/ledger-live/7-add-account.png)

![Confirmation that the account was added](./_ledger-cspr-live/ledger-live/8-add-account.png)

9. Click on the account summary, to view more details.

![Account summary](./_ledger-cspr-live/ledger-live/9-account-summary.png)

![Account details](./_ledger-cspr-live/ledger-live/10-account-details.png)

10. To add another account, open the **Account** option in the left-side navigation bar. Then, click on the **Add account** button.

![Add a second account](./_ledger-cspr-live/ledger-live/11-second-account.png)

## Receiving Tokens {#receive-tokens}

To receive tokens, you need to provide the sender with your account's public key.

:::caution

Casper accounts only support CSPR tokens. Sending other tokens to a Casper account may result in the permanent loss of funds.

:::

1. Click on the **Receive** option in the left-side navigation bar.

![Click on Receive](./_ledger-cspr-live/ledger-live/12-receive.png)

2. Choose an account from the drop-down list.

![Choose an account](./_ledger-cspr-live/ledger-live/13-receive.png)

3. Copy the address displayed, or use the corresponding QR code.

![Choose an account 2](./_ledger-cspr-live/ledger-live/14-receive.png)

4. Verify that the address displayed in Ledger Live matches the address on your Ledger screen. If it does, click **APPROVE**.

![Verify address part 1](./_ledger-cspr-live/ledger-live/15-receive.png)

![Verify address part 2](./_ledger-cspr-live/ledger-live/16-receive.png)

![Click approve](./_ledger-cspr-live/ledger-live/17-receive.png)

![Confirmation displayed](./_ledger-cspr-live/ledger-live/18-receive.png)

## Sending Tokens {#send-tokens}

Ledger Live supports sending CSPR tokens from one Casper account to another.

1. Start by clicking on the **Send** option in the left-side navigation bar. Choose the account to debit:

![Choose the account to debit](./_ledger-cspr-live/ledger-live/19-send.png)

2. Enter the recipient's address and click **Continue**.

![Enter reciepient](./_ledger-cspr-live/ledger-live/20-send.png)

3. Enter the amount and an optional transfer ID. Click **Continue**.

![Enter amount and transfer ID](./_ledger-cspr-live/ledger-live/21-send.png)

4. Review the summary, and if everything is correct, click **Continue**. Otherwise, click the **Back** link in the top-left corner.

![Review the transfer](./_ledger-cspr-live/ledger-live/22-send.png)

5. Your Ledger hardware wallet will present you with the transfer details. Verify the transaction hash, chain ID, source **account**, fee, target, and amount. Meanwhile, Ledger Live will display this message:

![Review the transaction in the Ledger](./_ledger-cspr-live/ledger-live/23-send.png)

**Verify the transaction on your Ledger device**

Press the right button on your Ledger Device to review the transaction details until you see **"APPROVE"**.

6. Review the **Txn hash**.

![3-txn-1](./_ledger-cspr-live/device/3-txn-1.jpg)

The Txn hash value continues on a second screen.

![4-tx-2](./_ledger-cspr-live/device/4-txn-2.jpg)

7.  The next screen displays the transaction **Type**, which will be **Token transfer**.

![5-type](./_ledger-cspr-live/device/5-type.jpg)

8. Verify the **chain ID**, which for Mainnet should be **casper**.

![7-chain](./_ledger-cspr-live/device/7-chain.jpg)

9. Verify the **Account** initiating the token transfer.

![8-account-1](./_ledger-cspr-live/device/8-account-1.jpg)

The Account value continues on a second screen.

![9-account-2](./_ledger-cspr-live/device/9-account-2.jpg)

10. Verify the **Fee**. For CSPR token transfers, that value should be constant and equal to 100,000,000 motes = 0.1 CSPR.

![10-fee](./_ledger-cspr-live/device/10-fee.jpg)

11. Verify the **Target**, which is the recipient's public key.

![11-target-1](./_ledger-cspr-live/device/11-target-1.jpg)

The Target value continues on a second screen.

![12-target-2](./_ledger-cspr-live/device/12-target-2.jpg)

12. Verify the **Amount** you want to transfer.

![13-amount](./_ledger-cspr-live/device/13-amount.jpg)

13. If you want to approve the transaction, click both buttons on the Ledger device while on the **APPROVE** screen.

![15-approve](./_ledger-cspr-live/device/15-approve.jpg)

14. After approving the transaction with your Ledger hardware wallet, Ledger Live will display the following windows:

![Broadcasting transaction](./_ledger-cspr-live/ledger-live/24-send.png)

![Transaction sent](./_ledger-cspr-live/ledger-live/25-send.png)

15. To view the transaction details, click on the **View details** button. The following screen will appear:

![Transaction details](./_ledger-cspr-live/ledger-live/26-send.png)

16. You can view the transaction in the CSPR.live block explorer by clicking on the **View in explorer** link.

![Explorer chowing transaction](./_ledger-cspr-live/ledger-live/27-send.png)