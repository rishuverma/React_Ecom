import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurreny";
type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((each) => each.id === id);
  if (item == null) return null;
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex align-items-center"
      >
        <img
          src={item.imgUrl}
          style={{ width: "120px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          x
        </Button>
      </Stack>
    </>
  );
}
