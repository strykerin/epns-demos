import { NotificationItem } from "@epnsproject/sdk-uiweb";
function Notifications({ notifications }) {
    return (
        <div>
            {notifications.map((oneNotification, i) => {
                const {
                    cta,
                    title,
                    message,
                    app,
                    icon,
                    image,
                    url,
                    blockchain,
                } = oneNotification;

                return (
                    <NotificationItem
                        key={i} // any unique id
                        notificationTitle={title}
                        notificationBody={message}
                        cta={cta}
                        app={app}
                        icon={icon}
                        image={image}
                        url={url}
                        theme='dark'
                        chainName={blockchain}
                    />
                );
            })}
        </div>
    )
}

export default Notifications;