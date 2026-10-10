import Button from './Button'
import TextArea from './TextArea'
import { api } from '../api/api'

const MessageField = () => {
const handleSumbit = async (e) => {
e.preventDefault()

const message = {
content: e.target.content.value
}
try{
await api.sendMessage(massage)
} catch (error) {
console.error(error)
}
}
    return (
        <div className="create-message-section">
            <div className="container">
                <div className="create-message-card">
                    <h2 className="create-message-title">Создать сообщение</h2>
                    <form
                        className="create-message-form">
                        <TextArea
                            name="content"
                            placeholder="Поделитесь мнением..."
                        />
                        <Button>Отправить</Button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default MessageField
