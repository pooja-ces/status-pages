interface IExternalService {
    name: string;
    link: string;
    label: string;
}


export const getExternalServices = (): Promise<IExternalService[]> => {
    return new Promise((resolve) => {
        resolve([
            { name: "AWS CloudFront", link: "https://health.aws.amazon.com/health/status", label: "CDN" },
            { name: "AWS EC2", link: "https://health.aws.amazon.com/health/status", label: "Server Hosting" },
            { name: "AWS Route 53", link: "https://health.aws.amazon.com/health/status", label: "DNS" },
            { name: "AWS S3", link: "https://health.aws.amazon.com/health/status", label: "File Hosting" },
            { name: "DigitalOcean", link: "https://status.digitalocean.com/", label: "Cloud Hosting" },
            { name: "GitHub", link: "https://www.githubstatus.com/", label: "Code Repository" },
            { name: "New Relic", link: "https://status.newrelic.com/", label: "Monitoring" },
            { name: "PagarDuty", link: "https://status.pagerduty.com/posts/dashboard", label: "Alerting" },
            { name: "pingdom", link: "https://status.pingdom.com/", label: "Monitoring" },
            { name: "Postmark", link: "https://status.postmarkapp.com/", label: "Email Delivery" },
            { name: "Slack", link: "https://slack-status.com/", label: "Chat" },
            { name: "Stripe", link: "https://status.stripe.com/", label: "Payment Processing" },
            { name: "Twitter", link: "https://status.twitterstat.us/", label: "Social Network" },
            { name: "YubiCloud", link: "https://status.yubico.com/", label: "Security" }
        ]);
    });
};