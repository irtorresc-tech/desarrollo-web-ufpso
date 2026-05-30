<template>
  <!-- Barra superior -->
  <SidebarComponent />

  <div class="flex-grow-1 p-4 bg-light">
    <h2>Productos</h2>

    <button
      class="btn btn-success mb-3"
      @click="$router.push('/products/new')"
    >
      Nuevo
    </button>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div v-if="success" class="alert alert-success">
      {{ success }}
    </div>

    <div v-if="loading" class="alert alert-info">
      Cargando productos...
    </div>

    <ProductTable
      :products="products"
      @edit="goEdit"
      @delete="handleDelete"
    />

    <div class="mt-3">
      <button
        class="btn btn-success"
        @click="goCreate"
      >
        Agregar producto
      </button>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
import { ref, onMounted } from 'vue'
import productService from '@/services/productService'
import ProductTable from '@/components/ProductTable.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    ProductTable,
    SidebarComponent
  },

  setup() {
    const products = ref([])
    const error = ref(null)
    const success = ref(null)
    const loading = ref(false)

    const router = useRouter()

    const load = async () => {
      error.value = null
      loading.value = true

      try {
        const res = await productService.getAllProducts()
        products.value = res.data
      } catch (err) {
        error.value =
          err.response?.data?.message ||
          'Error cargando productos'

        console.error(err)
      } finally {
        loading.value = false
      }
    }

    const goEdit = (id) => {
      router.push({
        name: 'ProductEdit',
        params: { id }
      })
    }

    const goCreate = () => {
      router.push({
        name: 'ProductCreate'
      })
    }

    const handleDelete = async (id) => {

      const confirmed = confirm(
        '¿Está seguro de eliminar este producto?'
      )

      if (!confirmed) return

      error.value = null
      success.value = null

      try {
        await productService.deleteProduct(id)

        success.value =
          'Producto eliminado correctamente'

        await load()

      } catch (err) {

        error.value =
          err.response?.data?.message ||
          'Error eliminando producto'

        console.error(err)
      }
    }

    onMounted(load)

    return {
      products,
      error,
      success,
      loading,
      goEdit,
      goCreate,
      handleDelete
    }
  }
}
</script>