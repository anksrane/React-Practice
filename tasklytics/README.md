# Tasklytics  

**Tasklytics** is a role-based task management application that helps teams manage and track tasks efficiently. It supports multiple roles (Admin, Manager, Coder) with distinct permissions and provides an analytics dashboard for insights.  

🔗 **Live Demo**: <a href="https://tasklytics-six.vercel.app/" target="_blank">Tasklytics on Vercel</a>

---

## 🚀 Features  
- 🔑 **Authentication & Roles** – Firebase Auth with Admin, Manager, and Coder roles.  
- 📝 **Task Management** – Create, update, delete, and assign tasks.  
- 👥 **Role-based Permissions** –  
  - **Admin**: Full access  
  - **Manager**: Assign coders, track progress  
  - **Coder**: Manage assigned tasks  
- 📊 **Analytics Dashboard** – Tasks by status, priority, due date, and recent activity.  
- 🗑 **Soft Delete & Restore** – Deleted tasks can be restored from trash.  
- 🎨 **Modern UI** – Built with Tailwind CSS and responsive layouts.  
- ⚡ **Deployed** on Vercel with CI/CD from GitHub.  

---

## 🛠 Tech Stack  
- **Frontend:** React 19, Vite, Redux Toolkit, React Hook Form  
- **Backend/DB:** Firebase (Auth, Firestore)  
- **UI Framework:** Tailwind CSS
- **Charts:** Google Charts  
- **Deployment:** Vercel  

---

## 🔑 Demo Credentials  

Use the following credentials to explore different roles:  

- **Admin**  
  - Email: `admin@test.com`  
  - Password: `demo123`  

- **Manager**  
  - Email: `manager1@test.com`  
  - Password: `demo123`  

- **Manager**  
  - Email: `manager2@test.com`  
  - Password: `demo123`  

- **Coder under Manager1**  
  - Email: `coder1@test.com`  
  - Password: `demo123`  

- **Coder under Manager1**  
  - Email: `coder2@test.com`  
  - Password: `demo123`

- **Coder under Manager2**  
  - Email: `coder3@test.com`  
  - Password: `demo123` 

- **Coder under Manager2**  
  - Email: `coder4@test.com`  
  - Password: `demo123` 

- **Coder under Manager2**  
  - Email: `coder5@test.com`  
  - Password: `demo123` 

---

## 📦 Installation & Setup  

```bash
# Clone repository
git clone https://github.com/your-username/tasklytics.git

# Navigate to project
cd tasklytics

# Install dependencies
npm install