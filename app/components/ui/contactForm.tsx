import { useState } from "react";

// Composant principal pour le formulaire de contact
export default function ContactForm() {
  // État pour gérer le statut du formulaire (succès ou échec de l'envoi)
  const [formStatus, setFormStatus] = useState("");
  // État pour désactiver le bouton "Envoyer" pendant l'envoi
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Fonction de gestion de l'envoi du formulaire
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le rechargement de la page au moment de la soumission
    setIsButtonDisabled(true); // Désactive le bouton pendant la requête

    const formData = new FormData(event.currentTarget); // Récupère les données du formulaire
    formData.append("access_key", "3ac6612a-0030-4191-950d-250d0a798bef"); // Ajoute la clé d'accès à l'API

    const object = Object.fromEntries(formData); // Convertit les données en objet
    const json = JSON.stringify(object); // Convertit l'objet en JSON

    // Requête POST à l'API Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json, // Envoie des données au format JSON
    });

    const result = await response.json(); // Analyse la réponse de l'API
    if (result.success) {
      setFormStatus("Merci, votre message a été envoyé !"); // Affiche un message de succès
    } else {
      setFormStatus("Une erreur est survenue, veuillez réessayer."); // Affiche un message d'erreur
      setIsButtonDisabled(false); // Réactive le bouton en cas d'échec
    }
  }

  return (
    <div className="contact-form">
      {/* Formulaire de contact */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champ pour le nom */}
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground border-2 border-black"
          />
        </div>

        {/* Champ pour l'email */}
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground border-2 border-black"
          />
        </div>

        {/* Champ pour le message */}
        <div className="form-group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground h-32 border-2 border-black"
          ></textarea>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className={`w-full bg-white text-black border-2 border-black font-semibold py-2 px-4 rounded-md cursor-pointer transition hover:bg-black hover:text-white ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled} // Désactive le bouton lors de l'envoi
        >
          Envoyer
        </button>
      </form>

      {/* Affichage du statut du formulaire (succès ou échec) */}
      {formStatus && (
        <p className="form-status mt-4 text-center text-black">{formStatus}</p>
      )}
    </div>
  );
}
