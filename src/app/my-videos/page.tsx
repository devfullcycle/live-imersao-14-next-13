import { Suspense } from "react";
import ListCategories from "../components/ListCategories";
import ListVideos from "../components/ListVideos";

export async function MyVideosPage() {
  return (
    <div>
      <h1>Meus videos</h1>
      <Suspense fallback={<p>Carregando as categorias</p>}>
        <ListCategories />
      </Suspense>
      <Suspense fallback={<p>Carregando os videos</p>}>
        <ListVideos />
      </Suspense>
    </div>
  );
}

export default MyVideosPage;
