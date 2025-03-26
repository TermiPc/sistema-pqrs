export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Lógica de autenticación
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } catch (error) {
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  export const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // Lógica de registro de usuario
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error en el servidor" });
    }
  };