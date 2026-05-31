import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Retrieve form data from the request
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // JDBC Connection parameters
        String jdbcUrl = "jdbc:mysql://localhost:3306/";
        String dbUser = "root";
        String dbPassword = "";

        Connection conn = null;
        PreparedStatement stmt = null;
        try {
            // Connect to the database
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

            // Prepare SQL statement
            String sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, password);

            // Execute SQL statement
            int rowsAffected = stmt.executeUpdate();

            // Send response to the client
            if (rowsAffected > 0) {
                response.getWriter().println("Account created successfully!");
            } else {
                response.getWriter().println("Failed to create account.");
            }
        } catch (SQLException | ClassNotFoundException ex) {
            ex.printStackTrace();
            response.getWriter().println("Database error: " + ex.getMessage());
        } finally {
            // Close resources
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}
