export const createPQRS = async (req, res) => {
    try {
      const { user, message, priority } = req.body;
      // Lógica para guardar PQRS
      res.status(201).json({ message: "PQRS enviada exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  export const getPQRS = async (req, res) => {
    try {
      // Lógica para obtener PQRS
      res.status(200).json([]);
    } catch (error) {
      res.status(500).json({ message: "Error en el servidor" });
    }
  };