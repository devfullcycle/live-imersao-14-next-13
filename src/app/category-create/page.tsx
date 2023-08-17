import Link from "next/link";
import CreateCategoryForm from "../components/CreateCategoryForm";

export function CategoryCreatePage() {

  return (
    <div>
      <h1>Criar categoria</h1>
      <Link href="/categories">Ir para categorias</Link>
      <CreateCategoryForm />
    </div>
  );
}

export default CategoryCreatePage;