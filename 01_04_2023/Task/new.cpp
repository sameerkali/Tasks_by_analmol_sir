#include <iostream>
#include <string>

using namespace std;

int main() {
    string username, password, email;
    cout << "Content-Type: text/html\n\n";
    cout << "<html><body>";
    cout << "<h1>Login/Signup Form</h1>";

    // Read the input from the HTML form
    getline(cin, username);
    getline(cin, password);
    getline(cin, email);

    // Check if the user is logging in or signing up
    bool isLogin = true; // Change this to false for the signup form
    string action = isLogin ? "login" : "signup";

    // Perform the login/signup logic
    bool success = false; // Change this based on your implementation

    // Return a response to the HTML form
    if (success) {
        cout << "<p>" << username << " successfully " << action << "!</p>";
    } else {
        cout << "<p>Invalid username or password.</p>";
    }

    cout << "</body></html>";

    return 0;
}
