# MSSQL Integration

To test the MSSQL integration

## Requirements

- Install [sqlcmd](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver15#macos) in your local system
- `docker pull mcr.microsoft.com/mssql/server:2019-latest`

# Quick Start

1. Run a docker with mssql

```sh
docker run \
    -e "ACCEPT_EULA=Y" \
    -e "SA_PASSWORD=1U7eSGn%Gk1" \
    -p 1433:1433 \
    --name sql1 \
    -h sql1 mcr.microsoft.com/mssql/server:2019-latest
```

2. Populate the database

```sh
cat - > /tmp/mssql-test-db.sql <<EOF
DROP DATABASE TestDB
CREATE DATABASE TestDB

IF OBJECT_ID(N'dbo.Inventory', N'U') IS NOT NULL
   DROP TABLE [dbo].[Inventory]
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
GO

USE TestDB
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
INSERT INTO Inventory VALUES (1, 'banana', 150)
INSERT INTO Inventory VALUES (2, 'orange', 154)
INSERT INTO Inventory VALUES (3, 'blake', 150)
INSERT INTO Inventory VALUES (4, 'fake', 159)
GO
EOF
sqlcmd -S 127.0.0.1 -U SA -P '1U7eSGn%Gk1' -i /tmp/mssql-test-db.sql
```

3. Export the agent environment variables

```env
export TAGS=local
# get a token from the production environment
export TOKEN=
export MSSQL_CONFIG='{"MSSQL_SERVER": "127.0.0.1", "MSSQL_USER": "SA", "MSSQL_PASS": "1U7eSGn%Gk1", "MSSQL_DB": "TestDB"}'
# the above configuration will return a csv output
# export MSSQL_CONFIG='{"MSSQL_SERVERNAME": "127.0.0.1", "MSSQL_USER": "SA", "MSSQL_PASS": "1U7eSGn%Gk1", "MSSQL_DB": "TestDB", "FIELD_SEPARATOR" ","}'
```

4. Run the agent

```sh
git clone git@github.com:runopsio/agent.git && cd agent
lein run
```

5. Create a target and run a task

```sh
runops targets create \
  --tags local \
  --name mssql-local \
  --type sql-server \
  --secret_provider env-var \
  --secret_mapping '{"MSSQL_SERVER": "MSSQL_SERVERNAME"}' \
  --secret_path "MSSQL_CONFIG"

runops tasks create -t mssql-local -s 'SELECT * FROM Inventory WHERE quantity > 152'
```

## References

- https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver15#macos
- https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash
- https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility?redirectedfrom=MSDN&view=sql-server-ver15
