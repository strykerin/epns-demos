import * as EpnsAPI from "@epnsproject/sdk-restapi";
import * as ethers from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const PK = process.env.CHANNEL_PRIVATE_KEY;
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const channelAddress = 'eip155:42:0x5d10A603f2722510c90Aa3478B81EBf693f343e8'
const recipientAddress = 'eip155:42:0x70B60b1Ad43bc00f42a14f8C9738537CB1076b18'

const sendNotification = async () => {
    try {
        await EpnsAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
                title: `Notification Title!`,
                body: `Notification Body!`
            },
            payload: {
                title: `Payload Title`,
                body: `Payload Body`,
                cta: 'https://docs.epns.io/developers',
                img: ''
            },
            recipients: recipientAddress,
            channel: channelAddress,
            env: 'staging'
        });

        console.log('Notification Sent!');
    } catch (err) {
        console.error('Error: ', err);
    }
}

sendNotification();