import Document,  {Html, Head, Main, NextScript} from "next/document";

class RedPilDoc extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="stylesheet" href="https://use.typekit.net/ldp6xyd.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default RedPilDoc;