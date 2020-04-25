<template>
  <div class="modal">
    <div class="modal-inner">
      <header class="modal-header">
        <p>¿Estas seguro que desea eliminar este video?</p>
        <button class='times' @click="onClose">X</button>
      </header>
      <div class="modal-body">
        <p>Presiones aceptar para eliminar el video de la lista de videos.</p>
        <p>Presione cancelar para conservar el video en la lista de videos.</p>
      </div>
      <footer class="modal-footer">
        <button class='accept' @click="handleAccept">Accept</button>
        <button class='cancel' @click="handleCancel">Cancel</button>
      </footer>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Modal',
  methods: {
    handleAccept() {
      this.$emit('onaccept');
    },
    handleCancel() {
      this.$emit('oncancel');
    },
    onClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(128, 128, 128, 0.267);
    display: grid;
    justify-content: center;
    align-items: center;
    .modal-inner {
      border-radius: 5px;
      background-color: white;
      header {
        display: flex;
        position: relative;
        .times {
          top: 0;
          right: 0;
          position: absolute;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1rem;
        }
        p {
          margin: 1rem 1.5rem 0 1.5rem;
          font-size: 1.2rem;
        }
      }
    .modal-body{
      margin: 1rem 1.5rem 1.5rem 1.5rem;
      p {
        color: gray;
        font-weight: normal;
        font-size: 0.9rem;
      }
    }

    footer {
      background-color: rgba(226, 223, 223, 0.774);
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0.7rem;
      .accept, .cancel {
        border: none;
        padding: 0.1rem 1rem;
        cursor: pointer;
        border-radius: 5px;
      }
      .accept {
        background-color: rgb(49,152,211);
      }
      .cancel {
        background-color: rgb(243,76,57);
      }
    }

    }
  }

</style>
