const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Thank you for your help!</h3>
                    <p>Please click the following link when you have exited so we can complete the log of your activity. Clicking a button will save us a lot of headache!</p>
                    <form action="${keys.redirectDomain}/api/surveys/webhooks">
                        Scope of work: <br>
                        <input type="text" name="jobScope">
                        <br>
                        <input type="submit" value="Submit">
                        <br>
                    </form>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};