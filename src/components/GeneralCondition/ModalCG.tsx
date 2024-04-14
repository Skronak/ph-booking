import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
    show: boolean,
    handleClose: () => void;
}

function ModalCG({show, handleClose}: Props) {
    return (
        <Modal size={"xl"} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Conditions générales de vente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>La commission consultative des pratiques
                commerciales recommande que les fournisseurs de
                produits ou de prestations de services en Nouvelle-
                Calédonie se dotent de conditions générales de
                vente établies selon les besoin de chacun, à partir
                du modèle proposé ci-après
                </p>
            <h2>
                1 - Conclusion du contrat
            </h2>
                <p>
                    Toute commande de produits implique l'adhésion sans
                    réserve aux présentes conditions générales de vente,
                    complétées ou aménagées par nos conditions
                    particulières,qui annulent toute clause contraire pouvant
                    figurer dans les conditions d'achat, bons de commande,
                    ou autres documents commerciaux
                </p>
                <h2>
                    2 - Prix
                </h2>
                <p>
                    Les marchandises sont facturées au tarif en vigueur au
                    jour de la passation de la commande.
                    Le tarif général est annexé aux présentes conditions.
                    Les prix peuvent être révisés sous réserve d'une
                    information préalable de 30 jours
                </p>
                <h2>
                    3 - Livraison
                </h2>
                <p>
                    La livraison est effectuée soit par la remise directe du
                    produit à l'acquéreur, soit par avis de mise à
                    disposition, soit par délivrance à un expéditeur ou à un
                    transporteur dans les locaux du vendeur ou dans tous
                    autres locaux désignés.
                    La vérification des marchandises par l'acheteur doit être
                    effectuée au moment de leur prise en charge.
                    En cas d'avarie ou de manquant, de réclamations sur
                    les vices apparents ou sur la non-conformité du produit
                    livré, l'acheteur émettra des réserves claires et précises
                    qu'il notifiera dans un délai de trois jours, suivant la
                    date de livraison par écrit auprès du vendeur ou du
                    transporteur. Il appartiendra à l'acheteur de fournir toute
                    justification quant à la réalité des anomalies constatées
                </p>
                <h2>
                    4 - Annulation
                </h2>
                <p>
                    Les délais de livraison sont indiqués en fonction des
                    disponibilités d'approvisionnement.
                    Sauf cas de force majeure (guerre, émeute, incendie,
                    grève totale ou partielle.), en cas de retard de livraison
                    d'une durée supérieure à .... après la date indicative de
                    livraison, l'acheteur aura l'option d'annuler sa
                    commande, sans pouvoir prétendre à quelque
                    indemnité que ce soit.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCG;