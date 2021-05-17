import React from 'react';

const Modal = () => (
    <div id="modalOverlay">
        <div id="modal">
            <h1>Nova Jornada</h1>
            <p></p>
            <h1>Dê um <strong>nome</strong> para essa Jornada</h1>
            <input type="text" />
            <p>Você poderá alterar essa informação depois.<p>

                <div class="buttons">
                    <button class="btnContinue" onClick="btnContinue()">Continuar</button>
                    <button class="btnCancel" onClick="btnCancel()">Cancelar</button>
                </div>
        </div>
    </div>

);

export default Modal;