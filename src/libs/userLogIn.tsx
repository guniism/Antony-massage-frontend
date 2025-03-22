export default async function userLogIn(userEmail: string, userPassword: string) {
    try {
        const response = await fetch("https://antony-massage-backend-production.up.railway.app/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        });
    
        const data = await response.json();
    
        if (!response.ok) {
            throw new Error(`Failed to login: ${data.message || "Unknown error"}`);
        }
        localStorage.setItem("token", data.token);
        return data;
    }
    catch (error) {
        console.error("Failed to login", error);
    }
    
}
