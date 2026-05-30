<template>
  <div>
    <!-- Barra de búsqueda -->
    <div class="mb-3">
      <input
        v-model="search"
        type="text"
        class="form-control"
        placeholder="Buscar producto por nombre o categoría..."
      >
    </div>

    <!-- Mensaje si no hay resultados -->
    <div
      v-if="filteredProducts.length === 0"
      class="alert alert-warning text-center"
    >
      No se encontraron productos.
    </div>

    <!-- Tabla -->
    <table
      v-else
      class="table table-bordered table-striped"
    >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="p in filteredProducts"
          :key="p.id"
        >
          <td>{{ p.name }}</td>
          <td>${{ p.price }}</td>
          <td>{{ p.category }}</td>
          <td>
            <button
              class="btn btn-primary btn-sm"
              @click="$emit('edit', p.id)"
            >
              Editar
            </button>

            <button
              class="btn btn-danger btn-sm ms-2"
              @click="$emit('delete', p.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['products'],

  data() {
    return {
      search: ''
    }
  },

  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.search.toLowerCase()) ||
        product.category.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>