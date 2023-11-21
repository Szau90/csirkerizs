<script setup>
defineProps(["flavour", "weight"]);
</script>

<template>
  <v-table density="compact" class="text-caption">
    <tbody class="bg-[#F0F0F8]">
      <tr align="right">
        <th>Ízesítés</th>

        <td>{{ flavour }}</td>
      </tr>

      <tr align="right">
        <th>Súly</th>

        <td>{{ weight }}</td>
      </tr>

      <tr align="right">
        <th>Elérhetőség:</th>

        <td>Raktáron</td>
      </tr>

      <tr align="right">
        <th>Várható szállítás:</th>

        <td>2-3 munkanap</td>
      </tr>
    </tbody>
  </v-table>
</template>
